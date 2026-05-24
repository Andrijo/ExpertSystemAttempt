export const EXPLICACIONES = {
  memoria_ram: {
    componente: "Memoria RAM",
    descripcion:
      "La memoria RAM es el espacio de trabajo temporal del procesador. Si falla, los datos en tránsito se corrompen o no pueden cargarse, causando cuelgues, pantallazos y errores aleatorios.",
    sintomasRelacionados: [
      "pantallazo_azul",
      "reinicios_constantes",
      "congelamientos",
      "sistema_lento",
      "archivos_corruptos",
      "pitidos_al_arrancar",
      "pantalla_negra",
    ],
    pasos: [
      "Resitúa los módulos de RAM (retira e inserta de nuevo).",
      "Prueba con un solo módulo a la vez.",
      "Ejecuta MemTest86 durante al menos un ciclo completo.",
      "Si hay errores, reemplaza el módulo defectuoso.",
    ],
    urgencia: "moderada",
  },
  disco_duro: {
    componente: "Disco duro / SSD",
    descripcion:
      "El almacenamiento guarda el sistema operativo y todos los archivos. Un disco con sectores dañados o en fallo provoca lentitud extrema, errores de arranque y corrupción de datos.",
    sintomasRelacionados: [
      "sistema_lento",
      "congelamientos",
      "error_no_bootable_device",
      "ruidos_metalicos",
      "archivos_corruptos",
    ],
    pasos: [
      "Ejecuta CrystalDiskInfo para ver el estado S.M.A.R.T.",
      "Busca sectores reasignados o errores pendientes.",
      "Haz una copia de seguridad inmediatamente si hay errores.",
      "Considera reemplazar el disco si la salud es crítica.",
    ],
    urgencia: "critica",
  },
  pasta_termica: {
    componente: "Pasta térmica",
    descripcion:
      "La pasta térmica conduce el calor entre el procesador y el disipador. Con el tiempo se reseca y pierde eficiencia, provocando que la CPU alcance temperaturas peligrosas.",
    sintomasRelacionados: ["calentamiento"],
    pasos: [
      "Retira el disipador de la CPU.",
      "Limpia la pasta vieja con alcohol isopropílico.",
      "Aplica una capa pequeña de pasta nueva (tamaño de un grano de arroz).",
      "Vuelve a montar el disipador correctamente.",
    ],
    urgencia: "preventiva",
  },
  ventilador: {
    componente: "Ventilador / Refrigeración",
    descripcion:
      "Los ventiladores mantienen la temperatura dentro de rangos seguros. Un ventilador obstruido, dañado o desconectado deja sin refrigeración al sistema, causando apagados de protección térmica.",
    sintomasRelacionados: [
      "calentamiento",
      "ruido_excesivo",
      "apagado_repentino",
      "pc_no_enciende",
    ],
    pasos: [
      "Verifica que todos los ventiladores giren al encender.",
      "Limpia el polvo del disipador y los fans con aire comprimido.",
      "Comprueba las conexiones de los ventiladores en la placa base.",
      "Reemplaza el ventilador si hace ruido o no gira.",
    ],
    urgencia: "moderada",
  },
  procesador: {
    componente: "Procesador (CPU)",
    descripcion:
      "La CPU ejecuta todas las instrucciones del sistema. Si se calienta demasiado o falla internamente, el sistema activa mecanismos de protección que causan apagados o congelamientos.",
    sintomasRelacionados: [
      "calentamiento",
      "congelamientos",
      "apagado_repentino",
    ],
    pasos: [
      "Revisa la temperatura en tiempo real con HWMonitor o CoreTemp.",
      "Verifica que el disipador esté bien sujeto.",
      "Renueva la pasta térmica si la temperatura supera 90 °C en reposo.",
      "Descarta overclocking inestable si aplica.",
    ],
    urgencia: "critica",
  },
  fuente_poder: {
    componente: "Fuente de poder (PSU)",
    descripcion:
      "La fuente convierte la corriente eléctrica para todos los componentes. Si falla o entrega voltajes inestables, el sistema se apaga sin aviso, no enciende o puede dañar otros componentes.",
    sintomasRelacionados: [
      "apagado_repentino",
      "pc_no_enciende",
      "olor_a_quemado",
    ],
    pasos: [
      "Huele el interior del gabinete: olor a quemado indica fallo grave.",
      "Prueba con otra fuente de poder compatible si es posible.",
      "Verifica que todos los conectores de alimentación estén bien insertados.",
      "No uses una fuente dañada; puede dañar la placa base y otros componentes.",
    ],
    urgencia: "critica",
  },
  tarjeta_grafica: {
    componente: "Tarjeta gráfica (GPU)",
    descripcion:
      "La GPU procesa y genera la imagen que ves en el monitor. Si falla su memoria o sus núcleos, aparecen artefactos visuales, pantalla negra o parpadeo.",
    sintomasRelacionados: [
      "artifacts_pantalla",
      "pantalla_negra",
      "parpadeo_monitor",
    ],
    pasos: [
      "Reinstala los drivers de la GPU desde el sitio oficial.",
      "Resitúa la tarjeta en el slot PCIe (retira e inserta de nuevo).",
      "Prueba con la salida de video integrada de la placa base.",
      "Si los artefactos persisten, la GPU puede necesitar reemplazo.",
    ],
    urgencia: "moderada",
  },
}
