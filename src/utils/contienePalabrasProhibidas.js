import { PALABRAS_PROHIBIDAS } from "../data/palabrasProhibidas"

const escaparRegex = (texto) => texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

export const obtenerPalabraProhibida = (texto) => {
  const normalizado = texto.toLowerCase().trim()

  for (const palabra of PALABRAS_PROHIBIDAS) {
    const regex = new RegExp(
      `\\b${escaparRegex(palabra.toLowerCase())}\\b`,
      "i",
    )
    if (regex.test(normalizado)) {
      return palabra
    }
  }

  return null
}
