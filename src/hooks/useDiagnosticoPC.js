import { useState, useCallback } from "react"
import { BASE_CONOCIMIENTO } from "../data/baseConocimiento"
import { extraerSintomas } from "../utils/extraerSintoma"
import { contienePalabrasProhibidas } from "../utils/contienePalabrasProhibidas"

export function useDiagnosticoPC() {
  const [diagnosticos, setDiagnosticos] = useState([])
  const [sintomasDetectados, setSintomasDetectados] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const limpiarDiagnosticos = useCallback(() => {
    setDiagnosticos([])
    setSintomasDetectados([])
    setError(null)
    setHasSearched(false)
  }, [])

  const consultarSintoma = useCallback((session, sintoma) => {
    return new Promise((resolve) => {
      const query = `posible_fallo(Componente, ${sintoma}).`

      session.query(query, {
        success: () => {
          const resultados = []

          const recolectar = () => {
            session.answer({
              success: (answer) => {
                resultados.push(answer.lookup("Componente").id)
                recolectar()
              },
              fail: () => resolve(resultados),
              error: (err) => {
                console.error(err)
                resolve(resultados)
              },
            })
          }

          recolectar()
        },
        error: (err) => {
          console.error(err)
          resolve([])
        },
      })
    })
  }, [])

  const analizarSintoma = useCallback(
    async (texto) => {
      if (typeof texto !== "string" || !texto.trim()) {
        limpiarDiagnosticos()
        return
      }

      if (contienePalabrasProhibidas(texto)) {
        setDiagnosticos([])
        setSintomasDetectados([])
        setError("El texto contiene palabras no permitidas.")
        setIsLoading(false)
        return
      }

      const sintomas = extraerSintomas(texto)

      setHasSearched(true)
      setSintomasDetectados(sintomas)
      setIsLoading(true)
      setError(null)

      const pl = window.pl
      const session = pl.create()

      session.consult(BASE_CONOCIMIENTO, {
        success: async () => {
          const resultadosPorSintoma = await Promise.all(
            sintomas.map((s) => consultarSintoma(session, s)),
          )

          const todos = resultadosPorSintoma.flat()
          const unicos = [...new Set(todos)]

          setDiagnosticos(unicos)
          setIsLoading(false)
        },
        error: (err) => {
          setError(`Error al cargar la base de conocimiento: ${err}`)
          setIsLoading(false)
        },
      })
    },
    [consultarSintoma, limpiarDiagnosticos],
  )

  return {
    diagnosticos,
    sintomasDetectados,
    error,
    isLoading,
    hasSearched,
    analizarSintoma,
    limpiarDiagnosticos,
  }
}
