import styles from "./ListaDiagnosticos.module.css"

export function ListaDiagnosticos({ diagnosticos, error }) {
  if (error) {
    return <p className={styles.error}> {error}</p>
  }

  if (diagnosticos.length === 0) {
    return (
      <p className={styles.empty}>
        No se encontraron problemas asociados a ese síntoma.
      </p>
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
