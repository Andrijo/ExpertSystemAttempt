// Base de Conocimiento

export const BASE_CONOCIMIENTO = `
  % Hechos

  % Memoria RAM
  causa(memoria_ram, pantallazo_azul).
  causa(memoria_ram, reinicios_constantes).
  causa(memoria_ram, pitidos_al_arrancar).
  causa(memoria_ram, pantalla_negra).
  causa(memoria_ram, congelamientos).
  causa(memoria_ram, sistema_lento).
  causa(memoria_ram, archivos_corruptos).
  causa(memoria_ram, error_no_bootable_device).
  causa(memoria_ram, ruidos_metalicos).
  causa(memoria_ram, parpadeo_monitor).
  causa(memoria_ram, apagado_repentino).

  % Almacenamiento
  causa(disco_duro, congelamientos).
  causa(disco_duro, sistema_lento).
  causa(disco_duro, error_no_bootable_device).
  causa(disco_duro, ruidos_metalicos).
  causa(disco_duro, archivos_corruptos).
  causa(disco_duro, reinicios_constantes).
  causa(disco_duro, pantalla_negra).
  causa(disco_duro, apagado_repentino).
  causa(disco_duro, pitidos_al_arrancar).
  causa(disco_duro, parpadeo_monitor).
  causa(disco_duro, calentamiento).        

  % Refrigeración y temperatura
  causa(pasta_termica, calentamiento).
  causa(ventilador, calentamiento).
  causa(ventilador, ruido_excesivo).
  causa(ventilador, apagado_repentino).
  causa(ventilador, pc_no_enciende).
  causa(ventilador, pitidos_al_arrancar).
  causa(ventilador, parpadeo_monitor).

  % Procesador
  causa(procesador, calentamiento).
  causa(procesador, congelamientos).
  causa(procesador, apagado_repentino).

  % Fuente de poder
  causa(fuente_poder, apagado_repentino).
  causa(fuente_poder, pc_no_enciende).
  causa(fuente_poder, olor_a_quemado).

  % Tarjeta gráfica
  causa(tarjeta_grafica, artifacts_pantalla).
  causa(tarjeta_grafica, pantalla_negra).
  causa(tarjeta_grafica, parpadeo_monitor).
  causa(tarjeta_grafica, calentamiento).     
  causa(tarjeta_grafica, fallo_driver).      
  causa(tarjeta_grafica, apagado_repentino).


  % Regñlas para inferencia

  % Regla 1: Inferencia directa
  % Un síntoma apunta directamente a un posible componente fallido.
  posible_fallo(Componente, Sintoma) :-
      causa(Componente, Sintoma).


  % Regla 2: Coincidencia Doble (Fallo Crítico)
  % Si dos síntomas distintos apuntan al mismo componente,
  fallo_confirmado(Componente, Sintoma1, Sintoma2) :-
      causa(Componente, Sintoma1),
      causa(Componente, Sintoma2),
      Sintoma1 \\= Sintoma2.


  % Regla 3: Clasificación por Prioridad/Gravedad
  diagnostico_prioridad(Componente, Sintoma, critica) :-
      causa(Componente, Sintoma),
      member(Sintoma, [
          pc_no_enciende,
          apagado_repentino,
          olor_a_quemado,
          pitidos_al_arrancar,
          ruidos_metalicos    
      ]).

  diagnostico_prioridad(Componente, Sintoma, moderada) :-
      causa(Componente, Sintoma),
      member(Sintoma, [
          pantallazo_azul,
          congelamientos,
          artifacts_pantalla,
          error_no_bootable_device,
          pantalla_negra,       
          archivos_corruptos,   
          reinicios_constantes, 
          fallo_driver          
      ]).

  diagnostico_prioridad(Componente, Sintoma, preventiva) :-
      causa(Componente, Sintoma),
      member(Sintoma, [
          sistema_lento,
          calentamiento,       
          ruido_excesivo,
          parpadeo_monitor
      ]).


  % Regla 4: Diagnóstico Combinado
  % Dado un conjunto de síntomas, verifica si todos pertenecen a un mismo componente.
  diagnostico_combinado(Componente, Sintomas) :-
      findall(Sintoma, causa(Componente, Sintoma), SintomasComponente),
      subset(Sintomas, SintomasComponente).


  % Regla 5: Diagnóstico de Exclusión (CORREGIDA)
  % Identifica síntomas que apuntan a un único componente posible.
  %      porque el propio Componente ya unifica la variable anónima.
  %      Ahora se usa findall para contar causantes y verificar unicidad.
  excluir_fallo(Componente, Sintoma) :-
      causa(Componente, Sintoma),
      findall(C, causa(C, Sintoma), Causantes),
      Causantes = [Componente].   % exactamente un único causante


  % Regla 6: Diagnóstico de Correlación
  % Si un síntoma apunta a múltiples componentes, se sugiere revisar ambos.
  diagnostico_correlacion(Componente1, Componente2, Sintoma) :-
      causa(Componente1, Sintoma),
      causa(Componente2, Sintoma),
      Componente1 \\= Componente2.


  % Regla 7: Diagnóstico de Tendencia
  % Síntomas que suelen empeorar progresivamente indican revisión preventiva.
  diagnostico_tendencia(Componente, Sintoma) :-
      causa(Componente, Sintoma),
      member(Sintoma, [calentamiento, sistema_lento, ruido_excesivo]).


  % Regla 8: Diagnóstico por Combinación de Síntomas (CORREGIDA)
  diagnostico_combinacion_sintomas(Componente, Sintoma1, Sintoma2) :-
      causa(Componente, Sintoma1),
      causa(Componente, Sintoma2),
      Sintoma1 \\= Sintoma2,
      member(Sintoma1, [
          pantallazo_azul, congelamientos,
          artifacts_pantalla, pantalla_negra, fallo_driver
      ]),
      member(Sintoma2, [
          error_no_bootable_device, ruidos_metalicos,
          parpadeo_monitor, apagado_repentino
      ]).


  % Regla 9: Diagnóstico de Exclusión Avanzada
  % Verifica que un componente causa un síntoma pero NO causa otro.
  % Útil para descartar componentes cuando coexisten síntomas incompatibles.;
  %      solo confirma que ese componente no tiene relación con SintomaExcluido,
  %      dejando al motor de inferencia tomar la decisión final.
  excluir_fallo_avanzado(Componente, SintomaIncluido, SintomaExcluido) :-
      causa(Componente, SintomaIncluido),
      \\+ causa(Componente, SintomaExcluido).


  % Regla 10: Diagnóstico de Correlación Avanzada
  % Entre dos componentes que comparten un síntoma, identifica cuál debe revisarse
  % primero porque además presenta un síntoma exclusivo.
  diagnostico_correlacion_avanzada(Componente1, Componente2, SintomaComun, SintomaEspecifico) :-
      causa(Componente1, SintomaComun),
      causa(Componente2, SintomaComun),
      Componente1 \\= Componente2,
      causa(Componente1, SintomaEspecifico),
      \\+ causa(Componente2, SintomaEspecifico).  
`
