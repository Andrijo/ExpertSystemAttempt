import { useState, useCallback } from "react"
import { BASE_CONOCIMIENTO } from "../data/baseConocimiento"
import { extraerSintomas } from "../utils/extraerSintoma"

export function useDiagnosticoPC() {
  const [diagnosticos, setDiagnosticos] = useState([])
  const [sintomasDetectados, setSintomasDetectados] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const limpiarDiagnosticos = useCallback(() => {
    setDiagnosticos([])
    setSintomasDetectados([])
    setError(null)
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

      const sintomas = extraerSintomas(texto)
      setSintomasDetectados(sintomas)
      setIsLoading(true)
      setError(null)

      const pl = window.pl
      const session = pl.create()

      session.consult(BASE_CONOCIMIENTO, {
        success: async () => {
          // Consulta para múltiples síntomas en paralelo
          const resultadosPorSintoma = await Promise.all(
            sintomas.map((s) => consultarSintoma(session, s)),
          )

          // Eliminar duplicados
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
    analizarSintoma,
    limpiarDiagnosticos,
  }
}
