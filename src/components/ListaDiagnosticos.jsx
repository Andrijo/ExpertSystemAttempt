import styles from "./ListaDiagnosticos.module.css"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function ListaDiagnosticos({ diagnosticos, error, onSeleccionar }) {
  useGSAP(() => {
    if (!diagnosticos || diagnosticos.length === 0) return
    gsap.from(".diagnostico-item", {
      y: 12,
      opacity: 0,
      duration: 0.35,
      stagger: 0.07,
      ease: "power2.out",
      clearProps: "all",
    })
  }, [diagnosticos])

  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  if (!diagnosticos || diagnosticos.length === 0) {
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
