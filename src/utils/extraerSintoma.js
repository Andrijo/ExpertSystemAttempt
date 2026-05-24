const PATRONES = [
  // Palabras clave para pantallazo azul
  {
    palabras: [
      "pantallazo azul",
      "pantalla azul",
      "bsod",
      "pantalla azul de la muerte",
      "blue screen",
      "se pone azul",
    ],
    sintoma: "pantallazo_azul",
  },

  // Palabras clave para pitidos
  {
    palabras: [
      "pita al arrancar",
      "pita al encender",
      "pitidos al inicio",
      "hace bip",
      "hace beep",
      "bips al encender",
      "beeps al encender",
      "suena al encender",
      "pitidos al arrancar",
      "emite pitidos",
    ],
    sintoma: "pitidos_al_arrancar",
  },

  // Para PC que no enciende
  {
    palabras: [
      "no enciende",
      "no prende",
      "no hace nada",
      "no pasa nada",
      "no arranca la pc",
      "no arranca la computadora",
      "no da señal",
      "no da señal de vida",
      "pc muerta",
      "computadora no enciende",
      "no inicia la pc",
    ],
    sintoma: "pc_no_enciende",
  },

  // Para pantalla negra
  {
    palabras: [
      "pantalla negra",
      "pantalla en negro",
      "monitor en negro",
      "no se ve nada en pantalla",
      "pantalla apagada pero pc encendida",
      "no hay imagen",
      "sin imagen",
    ],
    sintoma: "pantalla_negra",
  },

  // Oara parpadeo
  {
    palabras: [
      "parpadea la pantalla",
      "parpadea el monitor",
      "pantalla parpadea",
      "monitor parpadea",
      "parpadea",
      "pantalla titila",
      "titila",
      "titileo",
      "la imagen parpadea",
      "pantalla intermitente",
      "destellos en pantalla",
    ],
    sintoma: "parpadeo_monitor",
  },

  // Para cosas en la pantalla
  {
    palabras: [
      "artefactos en pantalla",
      "rayas en pantalla",
      "rayas en el monitor",
      "pixeles raros",
      "pixelado",
      "pantalla rara",
      "imagen distorsionada",
      "glitch en pantalla",
      "glitches",
      "tiene rayas",
      "cuadros en pantalla",
      "artifacts",
      "artefactos visuales",
    ],
    sintoma: "artifacts_pantalla",
  },

  // Para fallos de driver
  {
    palabras: [
      "error de driver",
      "fallo de driver",
      "falla el driver",
      "driver caido",
      "controlador falló",
      "error de controlador",
      "driver de video falla",
      "pantalla negra por driver",
      "driver crash",
      "driver se cayó",
    ],
    sintoma: "fallo_driver",
  },

  // Para no bootable device
  {
    palabras: [
      "no bootea",
      "no inicia windows",
      "no arranca windows",
      "no carga el sistema",
      "no encuentra el disco",
      "no booteable",
      "error de arranque",
      "operating system not found",
      "no operating system",
      "falla al iniciar",
      "no carga el sistema operativo",
      "no inicia el sistema",
    ],
    sintoma: "error_no_bootable_device",
  },

  // Para reinicios constantes
  {
    palabras: [
      "se reinicia solo",
      "se resetea solo",
      "reinicios constantes",
      "se reinicia constantemente",
      "se apaga y vuelve a encender",
      "se apaga y prende sola",
      "se apaga y prende solo",
      "reinicia solo",
      "se resetea",
      "bucle de reinicio",
      "loop de reinicio",
    ],
    sintoma: "reinicios_constantes",
  },

  // Para apagado repentino
  {
    palabras: [
      "se apaga sola",
      "se apaga solo",
      "apagado repentino",
      "se apaga de golpe",
      "se apaga sin avisar",
      "se apaga de repente",
      "apagado inesperado",
      "cierra todo de golpe",
    ],
    sintoma: "apagado_repentino",
  },

  // Para congelamientos
  {
    palabras: [
      "se congela",
      "se traba",
      "congelamiento",
      "se queda colgada",
      "se queda colgado",
      "no responde",
      "se cuelga",
      "se paraliza",
      "pantalla congelada",
      "se queda pegada",
    ],
    sintoma: "congelamientos",
  },

  // Para sistema lento
  {
    palabras: [
      "muy lenta",
      "va lenta",
      "va lento",
      "bien lenta",
      "tarda mucho",
      "esta lenta",
      "está lenta",
      "demasiado lenta",
      "demasiado lento",
      "tardísimo",
      "tarda mucho",
      "carga muy lento",
      "abre lento",
      "responde lento",
      "pésimo rendimiento",
      "lentitud",
    ],
    sintoma: "sistema_lento",
  },

  // Para archivos corruptos
  {
    palabras: [
      "archivos corruptos",
      "archivo corrupto",
      "archivos dañados",
      "archivo dañado",
      "no abre archivos",
      "archivos no se abren",
      "datos corruptos",
      "archivos perdidos",
      "archivos desaparecieron",
      "se corrompieron los archivos",
    ],
    sintoma: "archivos_corruptos",
  },

  // Para calentamiento
  {
    palabras: [
      "se calienta",
      "calor",
      "expulsa calor",
      "caliente",
      "calentamiento",
      "sobrecalentamiento",
      "muy caliente",
      "temperatura alta",
      "arde",
      "quema al tacto",
      "ventilador a mil",
      "ventilador a tope",
      "ventilador al máximo",
      "fan a tope",
    ],
    sintoma: "calentamiento",
  },

  // Para ruidos metálicos
  {
    palabras: [
      "ruido metalico",
      "ruido metálico",
      "rechinido",
      "rechina",
      "traquetea",
      "hace click raro",
      "clics raros",
      "clic clic",
      "ruido de disco",
      "disco hace ruido",
      "golpeteo",
      "raspado",
    ],
    sintoma: "ruidos_metalicos",
  },

  // Para ruido
  {
    palabras: [
      "mucho ruido",
      "ruido excesivo",
      "muy ruidosa",
      "muy ruidoso",
      "hace mucho ruido",
      "ventilador muy ruidoso",
      "fan muy ruidoso",
      "zumbido constante",
      "zumba mucho",
      "suena muy fuerte",
    ],
    sintoma: "ruido_excesivo",
  },

  // Para olor a quemado
  {
    palabras: [
      "huele a quemado",
      "olor a quemado",
      "olor raro",
      "olor extraño",
      "humo",
      "sale humo",
      "quemado",
      "olor a plástico quemado",
      "olor a electrónico quemado",
      "olor a circuito",
    ],
    sintoma: "olor_a_quemado",
  },
]

export const extraerSintomas = (texto) => {
  const normalizado = texto.toLowerCase().trim()

  const encontrados = PATRONES.filter(({ palabras }) =>
    palabras.some((p) => normalizado.includes(p)),
  ).map(({ sintoma }) => sintoma)

  if (encontrados.length > 0) return encontrados

  // Fallback: convierte el texto a un átomo Prolog válido.
  return [normalizado.replace(/[\s-]+/g, "_")]
}
