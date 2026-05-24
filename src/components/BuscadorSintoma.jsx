import styles from "./BuscadorSintoma.module.css"

export function BuscadorSintoma({ value, onChange, onAnalizar, isLoading }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const handleSubmit = () => {
    const valorLimpio = value.trim()
    if (!valorLimpio || isLoading) return
    onAnalizar(valorLimpio)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSubmit()
    }
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
        onClick={handleSubmit}
        disabled={isLoading || !value.trim()}
        className={styles.button}>
        {isLoading ? "Analizando…" : "Analizar"}
      </button>
    </div>
  )
}
