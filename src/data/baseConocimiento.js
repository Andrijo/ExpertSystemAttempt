// Clase para representar el conocimiento en Prolog
export const BASE_CONOCIMIENTO = `
  % Base de hechos
  
  % Memoria RAM (causa, consecuencia)
  causa(memoria_ram, pantallazo_azul).
  causa(memoria_ram, reinicios_constantes).
  causa(memoria_ram, pitidos_al_arrancar).
  causa(memoria_ram, pantalla_negra).
  causa(memoria_ram, congelamientos).
  
  % Almacenamiento (Disco Duro / SSD)
  causa(disco_duro, congelamientos).
  causa(disco_duro, sistema_lento).
  causa(disco_duro, error_no_bootable_device).
  causa(disco_duro, ruidos_metalicos).
  
  % Refrigeración y Temperatura
  causa(pasta_termica, calentamiento).
  causa(ventilador, calentamiento).
  causa(ventilador, ruido_excesivo).
  
  % Procesador (CPU)
  causa(procesador, calentamiento).
  causa(procesador, congelamientos).
  causa(procesador, apagado_repentino).
  
  % Fuente de Poder (PSU)
  causa(fuente_poder, apagado_repentino).
  causa(fuente_poder, pc_no_enciende).
  causa(fuente_poder, olor_a_quemado).
  
  % Tarjeta Gráfica (GPU)
  causa(tarjeta_grafica, artifacts_pantalla).
  causa(tarjeta_grafica, pantalla_negra).
  causa(tarjeta_grafica, parpadeo_monitor).


  % Reglas de inferencia
  
  % Regla 1: Inferencia directa (Tu regla base original)
  posible_fallo(Componente, Sintoma) :- 
      causa(Componente, Sintoma).

  % Regla 2: Coincidencia Doble (Fallo Crítico)
  % Si el usuario reporta DOS síntomas distintos y ambos apuntan al mismo componente,
  % la probabilidad de que ese sea el fallo real es altísima.
  fallo_confirmado(Componente, Sintoma1, Sintoma2) :-
      causa(Componente, Sintoma1),
      causa(Componente, Sintoma2),
      Sintoma1 \\= Sintoma2.

  % Regla 3: Clasificación del Diagnóstico por Prioridad/Gravedad
  % Devuelve el componente y qué tan urgente es revisarlo según el síntoma.
  diagnostico_prioridad(Componente, Sintoma, critica) :-
      causa(Componente, Sintoma),
      member(Sintoma, [pc_no_enciende, apagado_repentino, olor_a_quemado, pitidos_al_arrancar]).

  diagnostico_prioridad(Componente, Sintoma, moderada) :-
      causa(Componente, Sintoma),
      member(Sintoma, [pantallazo_azul, congelamientos, artifacts_pantalla, error_no_bootable_device]).

  diagnostico_prioridad(Componente, Sintoma, preventiva) :-
      causa(Componente, Sintoma),
      member(Sintoma, [sistema_lento, calentamiento, ruido_excesivo, parpadeo_monitor]).
`
