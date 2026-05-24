import styles from "./ListaDiagnosticos.module.css"

export function ListaDiagnosticos({ diagnosticos, error, hasSearched }) {
  if (error) {
    return (
      <p role="status" aria-live="polite" className={styles.error}>
        {error}
      </p>
    )
  }

  // Show a helpful message only after the user has performed a search
  if (diagnosticos.length === 0) {
    if (!hasSearched) return null

    return (
      <div
        role="status"
        aria-live="polite"
        className={styles.emptyContainer}
      >
        <p className={styles.emptyTitle}>No encontramos coincidencias</p>
        <p className={styles.empty}>
          Lo siento — no he encontrado información en la base de conocimiento para
          los síntomas indicados.
        </p>

        <ul className={styles.suggestions}>
          <li>Verifica la ortografía y prueba sinónimos (por ejemplo: "falla", "error").</li>
          <li>Añade más detalles (qué sucede exactamente, cuándo ocurre, mensajes de error).</li>
          <li>Si el problema es crítico o persiste, consulta con un técnico especializado.</li>
        </ul>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {diagnosticos.map((componente, index) => (
        <li key={index} className={styles.item}>
          <strong>{componente.replaceAll("_", " ")}</strong>
        </li>
      ))}
    </ul>
  )
}
