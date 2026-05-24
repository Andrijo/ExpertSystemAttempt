export const EXPLICACIONES = {
  // Explicaciones de memoria RAM
  memoria_ram: {
    componente: "Memoria RAM",
    descripcion:
      "La memoria RAM es el espacio de trabajo temporal del procesador. " +
      "Si uno o varios módulos fallan, los datos en tránsito se corrompen " +
      "o no pueden cargarse, causando cuelgues, pantallazos azules, pitidos " +
      "al arrancar y errores aleatorios que cambian entre reinicios.",
    sintomasRelacionados: [
      "pantallazo_azul",
      "reinicios_constantes",
      "pitidos_al_arrancar", // secuencia de pitidos indica fallo de POST
      "pantalla_negra",
      "congelamientos",
      "sistema_lento",
      "archivos_corruptos",
      "error_no_bootable_device",
      "ruidos_metalicos", // poco común, pero ranura dañada puede crujir
      "parpadeo_monitor",
      "apagado_repentino",
    ],
    pasos: [
      "Apaga el equipo y resitúa los módulos de RAM (retira e inserta de nuevo).",
      "Si hay más de un módulo, prueba con uno solo a la vez en cada ranura.",
      "Ejecuta MemTest86 desde USB durante al menos un ciclo completo (30–60 min).",
      "Anota los errores detectados: indican qué módulo o ranura está fallando.",
      "Prueba los módulos en otro equipo para confirmar el diagnóstico.",
      "Si hay errores confirmados, reemplaza el módulo defectuoso.",
    ],
    urgencia: "critica",
    herramientas: ["MemTest86", "Windows Memory Diagnostic"],
  },

  // Disco duro
  disco_duro: {
    componente: "Disco duro / SSD",
    descripcion:
      "El almacenamiento guarda el sistema operativo y todos los archivos. " +
      "Un HDD con sectores dañados produce ruidos metálicos y lentitud extrema; " +
      "un SSD con celdas agotadas puede corromperse sin avisar. " +
      "Ambos pueden fallar en el arranque o perder archivos de forma silenciosa.",
    sintomasRelacionados: [
      "congelamientos",
      "sistema_lento",
      "error_no_bootable_device",
      "ruidos_metalicos", // exclusivo de HDD mecánico
      "archivos_corruptos",
      "reinicios_constantes",
      "pantalla_negra",
      "apagado_repentino",
      "pitidos_al_arrancar",
      "parpadeo_monitor",
      "calentamiento", // SSDs y HDDs se calientan con lecturas intensas
    ],
    pasos: [
      "Ejecuta CrystalDiskInfo (Windows) o smartmontools (Linux/Mac) para leer el estado S.M.A.R.T.",
      "Presta atención a: Reallocated Sectors, Pending Sectors y Uncorrectable Errors.",
      "Si alguno de esos valores es mayor a 0, haz una copia de seguridad de inmediato.",
      "En Windows: ejecuta 'chkdsk C: /f /r' desde CMD como administrador.",
      "En HDD: escucha si hay clics o rechinidos — son señal de fallo mecánico inminente.",
      "Considera reemplazar el disco si la salud S.M.A.R.T. es 'Caution' o 'Bad'.",
    ],
    urgencia: "critica",
    herramientas: [
      "CrystalDiskInfo",
      "smartmontools",
      "chkdsk",
      "GSmartControl",
    ],
  },

  // Pasta térmica
  pasta_termica: {
    componente: "Pasta térmica",
    descripcion:
      "La pasta térmica rellena las micro-imperfecciones entre el procesador " +
      "y el disipador, conduciendo el calor de forma eficiente. " +
      "Con el tiempo (2–5 años) se reseca y pierde eficiencia, provocando que " +
      "la CPU suba de temperatura aunque el ventilador funcione correctamente.",
    sintomasRelacionados: ["calentamiento"],
    pasos: [
      "Retira el disipador de la CPU con cuidado (desconecta el ventilador primero).",
      "Limpia la pasta vieja de la CPU y el disipador con alcohol isopropílico al 90%+ y un hisopo.",
      "Aplica una cantidad pequeña de pasta nueva en el centro de la CPU (tamaño de un grano de arroz).",
      "No extiendas la pasta manualmente; el disipador la distribuirá al presionar.",
      "Vuelve a montar el disipador con la presión correcta y en orden cruzado.",
      "Verifica temperaturas después con HWMonitor; en reposo deberían bajar 10–20 °C.",
    ],
    urgencia: "preventiva",
    herramientas: ["HWMonitor", "CoreTemp", "alcohol isopropílico 90%+"],
  },

  // Ventilador
  ventilador: {
    componente: "Ventilador / Sistema de refrigeración",
    descripcion:
      "Los ventiladores expulsan el aire caliente del gabinete y del disipador. " +
      "Un ventilador obstruido por polvo, con rodamiento desgastado o desconectado " +
      "deja sin refrigeración al sistema. La BIOS detecta RPM en cero y puede " +
      "emitir pitidos, impedir el arranque o apagar el equipo por protección térmica.",
    sintomasRelacionados: [
      "calentamiento",
      "ruido_excesivo", // rodamiento desgastado
      "apagado_repentino", // protección térmica
      "pc_no_enciende", // BIOS bloquea arranque por fan fault
      "pitidos_al_arrancar", // código de fallo de ventilador CPU
      "parpadeo_monitor", // inestabilidad por temperatura
    ],
    pasos: [
      "Al encender, observa si todos los ventiladores (CPU, GPU, gabinete) giran.",
      "Limpia el polvo del disipador y los fans con aire comprimido cada 6–12 meses.",
      "Comprueba que los conectores del ventilador CPU estén en el header 'CPU_FAN' de la placa base.",
      "En la BIOS, verifica que 'CPU Fan Speed' reporte RPM mayor a 0.",
      "Si el ventilador hace ruido de rodamiento, reemplázalo antes de que falle por completo.",
      "Considera agregar ventiladores de gabinete si las temperaturas siguen altas.",
    ],
    urgencia: "critica",
    herramientas: ["HWMonitor", "SpeedFan", "BIOS Fan Control"],
  },

  // Procesador
  procesador: {
    componente: "Procesador (CPU)",
    descripcion:
      "La CPU ejecuta todas las instrucciones del sistema. " +
      "Si alcanza temperaturas críticas (>95 °C en la mayoría de modelos), " +
      "activa el throttling térmico (baja su velocidad) y, si el calor persiste, " +
      "apaga el equipo por protección. Fallos internos de la CPU son menos comunes " +
      "pero pueden causar congelamientos o reinicios impredecibles.",
    sintomasRelacionados: [
      "calentamiento",
      "congelamientos",
      "apagado_repentino",
    ],
    pasos: [
      "Instala HWMonitor o CoreTemp y revisa la temperatura de la CPU en reposo y bajo carga.",
      "En reposo: < 50 °C es normal. Bajo carga: < 85 °C es aceptable.",
      "Si supera 90 °C en reposo, la pasta térmica o el disipador son el problema inmediato.",
      "Verifica que el disipador esté firmemente sujeto y sin holgura.",
      "Descarta overclocking: regresa a valores por defecto en la BIOS si está activo.",
      "Si las temperaturas son normales pero hay congelamientos, evalúa la RAM y el disco primero.",
      "Un fallo de CPU propiamente dicho es raro; descarta otros componentes antes.",
    ],
    urgencia: "critica",
    herramientas: ["HWMonitor", "CoreTemp", "CPU-Z", "Prime95 (stress test)"],
  },

  // Fuente de poder
  fuente_poder: {
    componente: "Fuente de poder (PSU)",
    descripcion:
      "La fuente convierte la corriente alterna de la red eléctrica en los voltajes " +
      "que necesita cada componente (+12 V, +5 V, +3.3 V). " +
      "Si entrega voltajes inestables o insuficientes, el sistema se apaga sin aviso, " +
      "no enciende, o puede provocar daños en la placa base, CPU y GPU. " +
      "El olor a quemado indica un fallo grave e irreversible.",
    sintomasRelacionados: [
      "apagado_repentino",
      "pc_no_enciende",
      "olor_a_quemado",
    ],
    pasos: [
      "Huele el interior del gabinete: olor a quemado o plástico indica fallo grave — no enciendas más el equipo.",
      "Revisa que el cable de alimentación y el interruptor trasero de la PSU estén bien.",
      "Verifica que los conectores de 24 pines (placa base) y 8 pines (CPU) estén insertados completamente.",
      "Prueba con otra fuente compatible si tienes acceso a una.",
      "Usa un tester de PSU o multímetro para medir voltajes en los conectores Molex.",
      "Si la fuente está dañada, reemplázala antes de usar el equipo: puede dañar todos los componentes.",
      "Al comprar reemplazo, verifica que tenga la potencia suficiente para tu configuración (usa PCPartPicker).",
    ],
    urgencia: "critica",
    herramientas: ["Tester de PSU", "Multímetro", "HWMonitor (voltajes)"],
  },

  // Tarjeta gráfica
  tarjeta_grafica: {
    componente: "Tarjeta gráfica (GPU)",
    descripcion:
      "La GPU procesa y genera la imagen que ves en el monitor. " +
      "Si falla su memoria de video (VRAM), aparecen artefactos visuales, " +
      "rayas o píxeles de colores. Un driver corrupto o desactualizado puede " +
      "causar pantalla negra o cierres inesperados. " +
      "El sobrecalentamiento de la GPU también provoca apagados de protección.",
    sintomasRelacionados: [
      "artifacts_pantalla",
      "pantalla_negra",
      "parpadeo_monitor",
      "calentamiento", // GPU genera mucho calor bajo carga
      "fallo_driver", // driver crash o pantalla negra por driver
      "apagado_repentino", // protección térmica de GPU
    ],
    pasos: [
      "Reinstala los drivers usando DDU (Display Driver Uninstaller) en modo seguro, luego instala la versión más reciente.",
      "Resitúa la tarjeta en el slot PCIe (retira, limpia contactos con goma, reinserta).",
      "Verifica los conectores de alimentación PCIe (6 u 8 pines) de la GPU.",
      "Conecta el monitor a la salida de video integrada de la placa base: si la imagen es normal, el problema es la GPU.",
      "Revisa la temperatura de la GPU con GPU-Z o MSI Afterburner bajo carga; no debería superar 90 °C.",
      "Si los artefactos aparecen incluso en BIOS o antes de cargar Windows, el fallo es de hardware.",
      "Como último recurso, prueba la GPU en otro equipo para confirmar si el fallo es del componente.",
    ],
    urgencia: "moderada",
    herramientas: [
      "DDU (Display Driver Uninstaller)",
      "GPU-Z",
      "MSI Afterburner",
      "FurMark (stress test)",
    ],
  },
}
