import { useState, useCallback } from "react"
import { BASE_CONOCIMIENTO } from "../data/baseConocimiento"

export function useDiagnosticoPC() {
  const [diagnosticos, setDiagnosticos] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const limpiarDiagnosticos = useCallback(() => {
    setDiagnosticos([])
    setError(null)
  }, [])

  const analizarSintoma = useCallback(
    (sintoma) => {
      if (!sintoma.trim()) {
        limpiarDiagnosticos()
        return
      }

      setIsLoading(true)
      setError(null)

      const pl = window.pl
      const session = pl.create()

      session.consult(BASE_CONOCIMIENTO, {
        success: () => {
          const query = `posible_fallo(Componente, ${sintoma.trim().toLowerCase()}).`

          session.query(query, {
            success: () => {
              const resultados = []

              const recolectar = () => {
                session.answer({
                  success: (answer) => {
                    resultados.push(answer.lookup("Componente").id)
                    recolectar()
                  },
                  fail: () => {
                    setDiagnosticos(resultados)
                    setIsLoading(false)
                  },
                  error: (err) => {
                    setError(`Error al obtener respuesta: ${err}`)
                    setIsLoading(false)
                  },
                })
              }

              recolectar()
            },
            error: (err) => {
              setError(`Consulta inválida: ${err}`)
              setIsLoading(false)
            },
          })
        },
        error: (err) => {
          setError(`Error al cargar la base de conocimiento: ${err}`)
          setIsLoading(false)
        },
      })
    },
    [limpiarDiagnosticos],
  )

  return {
    diagnosticos,
    error,
    isLoading,
    analizarSintoma,
    limpiarDiagnosticos,
  }
}
