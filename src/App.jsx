import { useState } from "react"
import { useDiagnosticoPC } from "./hooks/useDiagnosticoPC"
import { BuscadorSintoma } from "./components/BuscadorSintoma"
import { ListaDiagnosticos } from "./components/ListaDiagnosticos"
import styles from "./App.module.css"

export default function DiagnosticoPC() {
  const [sintoma, setSintoma] = useState("")
  const {
    diagnosticos,
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
          Diagnostica
          <span className={styles.subtitle}>tu PC</span>
        </h1>

        <p className={styles.description}>
          Por favor, introduzca el síntoma que presenta su computadora.
          (Ejemplo: pantallazo azul, calentamiento, lentitud, etc.)
        </p>

        <BuscadorSintoma
          value={sintoma}
          onChange={handleChangeSintoma}
          onAnalizar={() => analizarSintoma(sintoma)}
          isLoading={isLoading}
        />

        {textExists && (
          <div className={styles.results}>
            <h4 className={styles.resultsTitle}>Posible causa:</h4>
            <ListaDiagnosticos diagnosticos={diagnosticos} error={error} />
          </div>
        )}
      </div>
    </div>
  )
}
