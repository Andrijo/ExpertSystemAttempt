const PATRONES = [
  // Pantallazo azul
  {
    palabras: [
      "pantallazo azul",
      "pantalla azul",
      "bsod",
      "pantalla azul de la muerte",
      "blue screen",
      "se pone azul",
      "pantallazo",
      "error azul",
    ],
    sintoma: "pantallazo_azul",
  },

  // Pitidos al arrancar
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
      "beep al encender",
      "beeps",
    ],
    sintoma: "pitidos_al_arrancar",
  },

  // PC que no enciende
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
      "no prende la pc",
      "no da imagen ni enciende",
    ],
    sintoma: "pc_no_enciende",
  },

  // Pantalla negra
  {
    palabras: [
      "pantalla negra",
      "pantalla en negro",
      "monitor en negro",
      "no se ve nada en pantalla",
      "pantalla apagada pero pc encendida",
      "no hay imagen",
      "sin imagen",
      "sin video",
      "monitor sin señal",
    ],
    sintoma: "pantalla_negra",
  },

  // Parpadeo monitor
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
      "flicker",
      "pantalla con destellos",
    ],
    sintoma: "parpadeo_monitor",
  },

  // Artefactos
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
      "pixeles verdes",
      "píxeles verdes",
      "cuadriculado",
    ],
    sintoma: "artifacts_pantalla",
  },

  // Fallo driver
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
      "driver de pantalla",
      "controlador de video",
      "pantallazo por driver",
    ],
    sintoma: "fallo_driver",
  },

  // Error de arranque
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
      "boot device not found",
      "no boot device",
      "no bootable device",
      "no encuentra el sistema operativo",
    ],
    sintoma: "error_no_bootable_device",
  },

  // Reinicios constantes
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
      "reinicia sin parar",
    ],
    sintoma: "reinicios_constantes",
  },

  // Apagado repentino
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
      "apagados repentinos",
      "se corta la energia",
      "se corta la luz",
    ],
    sintoma: "apagado_repentino",
  },

  // Congelamientos
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
      "se bloquea",
    ],
    sintoma: "congelamientos",
  },

  // Sistema lento
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
      "tarda demasiado",
      "tarda en cargar",
      "carga lento",
      "carga muy lento",
      "abre lento",
      "responde lento",
      "pésimo rendimiento",
      "lentitud",
      "se pone lenta",
    ],
    sintoma: "sistema_lento",
  },

  // Archivos corruptos
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
      "documentos dañados",
    ],
    sintoma: "archivos_corruptos",
  },

  // Calentamiento
  {
    palabras: [
      "se calienta",
      "calor",
      "expulsa calor",
      "caliente",
      "calentamiento",
      "sobrecalentamiento",
      "sobrecalienta",
      "muy caliente",
      "temperatura alta",
      "arde",
      "quema al tacto",
      "ventilador a mil",
      "ventilador a tope",
      "ventilador al máximo",
      "fan a tope",
      "se calienta demasiado",
      "se calienta mucho",
    ],
    sintoma: "calentamiento",
  },

  // Ruidos metálicos
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
      "clics del disco",
      "ruido del hdd",
      "se escucha el disco",
    ],
    sintoma: "ruidos_metalicos",
  },

  // Ruido excesivo
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
      "ruido fuerte",
      "sonido fuerte",
    ],
    sintoma: "ruido_excesivo",
  },

  // Olor a quemado
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
      "olor a quemado fuerte",
    ],
    sintoma: "olor_a_quemado",
  },

  // No carga
  {
    palabras: [
      "no carga",
      "no carga la bateria",
      "no carga la batería",
      "no carga el cargador",
      "no toma carga",
      "no entra carga",
      "carga intermitente",
      "bateria no carga",
      "batería no carga",
    ],
    sintoma: "no_carga",
  },
]

export const extraerSintomas = (texto) => {
  const normalizado = texto.toLowerCase().trim()

  const encontrados = PATRONES.filter(({ palabras }) =>
    palabras.some((p) => normalizado.includes(p)),
  ).map(({ sintoma }) => sintoma)

  if (encontrados.length > 0) return encontrados
  return []
  //return [normalizado.replace(/[\s-]+/g, "_")]
}
