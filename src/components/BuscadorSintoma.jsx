import styles from "./BuscadorSintoma.module.css"

export function BuscadorSintoma({ value, onChange, onAnalizar, isLoading }) {
  const normalizarSintoma = (texto) =>
    texto.toLowerCase().replace(/[\s-]+/g, "_")

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onAnalizar()
  }

  const handleChange = (e) => {
    onChange(normalizarSintoma(e.target.value))
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Introduzca el síntoma..."
        aria-label="Síntoma a diagnosticar"
        className={styles.input}
      />

      <button
        onClick={onAnalizar}
        disabled={isLoading || !value.trim()}
        className={styles.button}>
        {isLoading ? "Analizando…" : "Analizar"}
      </button>
    </div>
  )
}
