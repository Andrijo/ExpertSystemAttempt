import styles from "./ListaDiagnosticos.module.css"

export function ListaDiagnosticos({ diagnosticos, error, onSeleccionar }) {
  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  if (diagnosticos.length === 0) {
    return (
      <p className={styles.empty}>
        No se encontraron componentes asociados a ese síntoma.
      </p>
    )
  }

  return (
    <ul className={styles.list}>
      {diagnosticos.map((diagnostico, index) => (
        <li
          key={index}
          className={styles.item}
          onClick={() => onSeleccionar?.(diagnostico)}>
          <span className={styles.name}>
            {diagnostico.replaceAll("_", " ")}
          </span>
          <span className={styles.arrow}>→</span>
        </li>
      ))}
    </ul>
  )
}
