# Diagnostica tu PC

Aplicación de ejemplo en React + Vite que actúa como un pequeño sistema experto para diagnosticar posibles fallos de hardware en una PC a partir de la descripción de síntomas.

Resumen rápido
- El usuario escribe un síntoma en la UI.
- extraerSintomas convierte el texto en uno o varios 'síntomas' canónicos.
- Se valida que el texto no contenga palabras prohibidas (lista en `src/data/palabrasProhibidas.js`).
- Si es válido, se carga la base de conocimiento Prolog (`src/data/baseConocimiento.js`) en Tau Prolog (cargado por CDN desde `index.html`) y se consultan reglas para inferir posibles componentes fallidos.
- Los resultados se muestran en la lista; al seleccionar una causa se muestra información detallada (explicaciones, pasos y videos).

Estructura principal
- `src/App.jsx` — Componente raíz y orquestador de la UI.
- `src/hooks/useDiagnosticoPC.js` — Lógica principal: extracción de síntomas, comprobación de palabras prohibidas y consulta a Tau Prolog.
- `src/data/baseConocimiento.js` — Base de conocimiento y reglas Prolog usadas por el motor de inferencia.
- `src/data/explicaciones.js` — Información detallada (pasos, herramientas, videos) para cada componente.
- `src/utils/extraerSintoma.js` — Mapea texto libre a síntomas canónicos.
- `src/utils/contienePalabrasProhibidas.js` — Detección de palabras no permitidas.
- `src/components/*` — Componentes visuales (BuscadorSintoma, ListaDiagnosticos, DetalleDiagnostico).
- `index.html` — Carga de la app y del runtime de Tau Prolog (CDN).

Dependencias
- Dependencias de producción (definidas en `package.json`):
  - react ^19
  - react-dom ^19
  - @gsap/react ^2 (para animaciones)
- Dependencias de desarrollo:
  - vite ^8 (dev server / build)
  - @vitejs/plugin-react
  - eslint y plugins relacionados

Requisitos
- Node.js (recomendado 16+). Vite funciona mejor en Node 16 o superior.
- Conexión a Internet para cargar Tau Prolog desde el CDN (si no se quiere depender de CDN, ver nota abajo).

Instalación y ejecución
1. Instalar dependencias:

   npm install

2. Ejecutar en desarrollo (con HMR):

   npm run dev

   Esto levanta Vite y abre la app en http://localhost:5173 (u otro puerto que muestre Vite).

3. Generar build para producción:

   npm run build

4. Previsualizar la build:

   npm run preview

Notas de uso
- El motor Prolog (Tau Prolog) se carga mediante la etiqueta script en `index.html`:
  <script src="https://cdn.jsdelivr.net/npm/tau-prolog@0.3.4/modules/core.js"></script>
  Si trabaja sin conexión o prefiere dependencias empaquetadas, instale `tau-prolog` como paquete npm y adapte `useDiagnosticoPC` para importar/crear la instancia desde el paquete en lugar de `window.pl`.
- Si la consola muestra `pl is undefined`, asegúrese de que `index.html` carga el script de Tau Prolog antes del bundle y que la app se sirve desde el dev server o build (abrir el archivo directamente con el filesystem puede causar problemas con módulos y variables globales).

Dónde modificar la lógica o el conocimiento
- Añadir o ajustar hechos y reglas: editar `src/data/baseConocimiento.js`.
- Añadir/editar explicaciones y pasos: `src/data/explicaciones.js`.
- Ajustar patrones de extracción de lenguaje natural: `src/utils/extraerSintoma.js`.
- Editar lista de palabras prohibidas: `src/data/palabrasProhibidas.js`.

Problemas y solución rápida
- No aparecen resultados después de buscar: compruebe la consola del navegador por errores (por ejemplo, fallos al cargar o parsear la base de conocimiento en Tau Prolog).
- Mensaje de palabra no permitida: la búsqueda quedará bloqueada y se mostrará la palabra detectada.
- Si necesita ejecutar las consultas Prolog desde un entorno sin `window` (p. ej. SSR), la integración actual no funcionará sin adaptar el motor Prolog a un paquete compatible con Node.

Licencia
Este repositorio no incluye una licencia explícita (compruebe con el autor si necesita una).

Contacto / próximos pasos
- Para mejorar la extracción de lenguaje natural puede integrar librerías de NLP o añadir más patrones en `extraerSintoma.js`.
- Si desea empaquetar Tau Prolog en el build, puedo ayudar a convertir la dependencia CDN a una importación desde npm y ajustar el hook `useDiagnosticoPC`.
