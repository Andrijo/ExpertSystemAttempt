import { PALABRAS_PROHIBIDAS } from "../data/palabrasProhibidas"

const escaparRegex = (texto) => texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

export const contienePalabrasProhibidas = (texto) => {
  const normalizado = texto.toLowerCase()

  return PALABRAS_PROHIBIDAS.some((palabra) => {
    const regex = new RegExp(
      `\\b${escaparRegex(palabra.toLowerCase())}\\b`,
      "i",
    )
    return regex.test(normalizado)
  })
}
