import styles from "./DetalleDiagnostico.module.css"
import { EXPLICACIONES } from "../data/explicaciones"

export function DetalleDiagnostico({ causa, sintomasDetectados, onVolver }) {
  const detalle = EXPLICACIONES[causa]

  console.log("causa recibida:", causa)
  console.log("detalle encontrado:", detalle)

  if (!detalle) {
    return (
      <div className={styles.container}>
        <button className={styles.backButton} onClick={onVolver}>
          Regresar
        </button>
        <p className={styles.text}>
          Actualmente, no hay información disponible para este problema.
        </p>
      </div>
    )
  }

  const sintomasCoincidentes = sintomasDetectados.filter((sintoma) =>
    detalle.sintomasRelacionados.includes(sintoma),
  )

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onVolver}>
        Regresar
      </button>

      <h3 className={styles.title}>{detalle.componente}</h3>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>¿Por qué podría ser esta causa?</h4>
        <p className={styles.text}>{detalle.descripcion}</p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>¿Cómo se llegó a esta conclusión?</h4>
        <p className={styles.text}>
          Se llegó a esta conclusión porque los síntomas que se reportaron
          coinciden con los síntomas asociados a este componente en la base de
          conocimiento.
        </p>

        <div className={styles.chips}>
          {sintomasCoincidentes.map((s, i) => (
            <span key={i} className={styles.chip}>
              {s.replaceAll("_", " ")}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Pasos sugeridos</h4>
        <ul className={styles.list}>
          {detalle.pasos.map((paso, i) => (
            <li key={i} className={styles.listItem}>
              {paso}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Herramientas sugeridas</h4>
        <ul className={styles.list}>
          {detalle.herramientas.map((herramienta, i) => (
            <li key={i} className={styles.listItem}>
              {herramienta}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
