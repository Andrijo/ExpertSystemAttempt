import { useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useDiagnosticoPC } from "./hooks/useDiagnosticoPC"
import { BuscadorSintoma } from "./components/BuscadorSintoma"
import { ListaDiagnosticos } from "./components/ListaDiagnosticos"
import styles from "./App.module.css"

gsap.registerPlugin(useGSAP)

export default function DiagnosticoPC() {
  const [draftSintoma, setDraftSintoma] = useState("")

  const cardRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const resultsRef = useRef(null)

  const {
    diagnosticos,
    sintomasDetectados,
    error,
    palabraProhibida,
    isLoading,
    hasSearched,
    analizarSintoma,
    limpiarDiagnosticos,
  } = useDiagnosticoPC()

  const handleChangeSintoma = (nuevoValor) => {
    setDraftSintoma(nuevoValor)
    limpiarDiagnosticos()
  }

  const handlerAnalizar = () => {
    analizarSintoma(draftSintoma.trim())
  }

  const mostrarResultados = hasSearched

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(cardRef.current, {
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        titleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.45",
      )
      .from(
        descriptionRef.current,
        {
          y: 12,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.35",
      )
  }, [])

  useGSAP(() => {
    if (!resultsRef.current) return

    gsap.fromTo(
      resultsRef.current,
      {
        y: 16,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "all",
      },
    )
  }, [mostrarResultados, diagnosticos, sintomasDetectados, error])

  return (
    <div className={styles.wrapper}>
      <div ref={cardRef} className={styles.card}>
        <h1 ref={titleRef} className={styles.title}>
          Diagnóstico
          <span className={styles.subtitle}>de PC</span>
        </h1>

        <p ref={descriptionRef} className={styles.description}>
          Describe el problema que estás experimentando con tu computadora y
          nuestro sistema experto tratará de ayudarte
        </p>

        <BuscadorSintoma
          value={draftSintoma}
          onChange={handleChangeSintoma}
          onAnalizar={handlerAnalizar}
          isLoading={isLoading}
        />

        {palabraProhibida && (
          <p className={styles.errorMessage}>
            La palabra <strong>{palabraProhibida}</strong> no está permitida.
          </p>
        )}

        {mostrarResultados && (
          <div ref={resultsRef} className={styles.results}>
            {sintomasDetectados.length > 0 && (
              <div className={styles.chips}>
                Síntomas detectados:
                {sintomasDetectados.map((s, i) => (
                  <span key={i} className={styles.chip}>
                    {s.replaceAll("_", " ")}
                  </span>
                ))}
              </div>
            )}

            <h4 className={styles.resultsTitle}>Posibles causas:</h4>
            <ListaDiagnosticos diagnosticos={diagnosticos} error={error} hasSearched={hasSearched} />
          </div>
        )}
      </div>
    </div>
  )
}
