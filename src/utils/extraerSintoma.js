const PATRONES = [
  {
    palabras: ["pantallazo azul", "pantalla azul", "bsod"],
    sintoma: "pantallazo_azul",
  },
  {
    palabras: [
      "muy lenta",
      "va lenta",
      "lento",
      "tarda mucho",
      "esta lenta",
      "está lenta",
    ],
    sintoma: "sistema_lento",
  },
  {
    palabras: ["se congela", "congelamiento", "se traba"],
    sintoma: "congelamientos",
  },
  {
    palabras: ["se calienta", "caliente", "calentamiento", "se_calienta"],
    sintoma: "calentamiento",
  },
  {
    palabras: ["se apaga", "apagado", "apaga sola", "apaga solo"],
    sintoma: "apagado_repentino",
  },
  {
    palabras: [
      "artifacts",
      "artefactos",
      "rayas en pantalla",
      "pixeles raros",
      "pantalla rara",
    ],
    sintoma: "artifacts_pantalla",
  },
]

export const extraerSintomas = (texto) => {
  const normalizado = texto.toLowerCase().trim()

  const encontrados = PATRONES.filter(({ palabras }) =>
    palabras.some((p) => normalizado.includes(p)),
  ).map(({ sintoma }) => sintoma)

  if (encontrados.length > 0) return encontrados
  console.log("texto:", texto)
  console.log("normalizado:", normalizado)
  console.log("encontrados:", encontrados)
  return [normalizado.replace(/[\s-]+/g, "_")]
}
