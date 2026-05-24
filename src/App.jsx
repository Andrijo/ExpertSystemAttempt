import { useState } from "react"
import { useDiagnosticoPC } from "./hooks/useDiagnosticoPC"
import { BuscadorSintoma } from "./components/BuscadorSintoma"
import { ListaDiagnosticos } from "./components/ListaDiagnosticos"
import styles from "./App.module.css"

export default function DiagnosticoPC() {
  const [sintoma, setSintoma] = useState("")
  const {
    diagnosticos,
    sintomasDetectados,
    error,
    isLoading,
    analizarSintoma,
    limpiarDiagnosticos,
  } = useDiagnosticoPC()

  const textExists = sintoma.trim().length > 0

  const handleChangeSintoma = (nuevoValor) => {
    setSintoma(nuevoValor)
    limpiarDiagnosticos()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Diagnóstico
          <span className={styles.subtitle}>de PC</span>
        </h1>

        <p className={styles.description}>
          Describa el problema que está experimentando y el sístema tratará de
          ayudarlo:
        </p>

        <BuscadorSintoma
          value={sintoma}
          onChange={handleChangeSintoma}
          onAnalizar={analizarSintoma}
          isLoading={isLoading}
        />

        {textExists && (
          <div className={styles.results}>
            {sintomasDetectados.length > 0 && (
              <div className={styles.chips}>
                Síntomas detectados:&nbsp;
                {sintomasDetectados.map((s, i) => (
                  <span key={i} className={styles.chip}>
                    {s.replaceAll("_", " ")}
                  </span>
                ))}
              </div>
            )}

            <h4 className={styles.resultsTitle}>Posibles causas:</h4>
            <ListaDiagnosticos diagnosticos={diagnosticos} error={error} />
          </div>
        )}
      </div>
    </div>
  )
}
