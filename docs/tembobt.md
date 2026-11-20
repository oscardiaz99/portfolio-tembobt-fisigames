# temboBT · React frontend foundation

## Contexto

La base local de temboBT utiliza Next.js App Router, React, Tailwind, GSAP, Lenis y un stage 3D con React Three Fiber y Theatre.js. El README de esa base la describe como una fundación técnica, no como un diseño comercial final. La selección pública se limita a tres archivos React sin dependencias de infraestructura.

## Problema y decisión

Una experiencia visual puede montar observers o elementos costosos antes de que hagan falta. Además, el movimiento debe respetar la preferencia del usuario. Separar ese comportamiento en hooks permite mantener la UI y la animación desacopladas.

| Archivo | Comportamiento | Decisión relevante |
|---|---|---|
| [`useReducedMotion.js`](../src/tembo/useReducedMotion.js) | Escucha `prefers-reduced-motion` | Sincroniza en cliente y elimina el listener al desmontar |
| [`useLazyActivation.js`](../src/tembo/useLazyActivation.js) | Activa al entrar cerca del viewport | Desconecta el observer después de la activación y durante cleanup |
| [`ParallaxLayers.jsx`](../src/tembo/ParallaxLayers.jsx) | Capas decorativas según progreso | `aria-hidden`, transformaciones y movimiento nulo con preferencia reducida |

## Cómo revisarlo

La demo de este repositorio utiliza los tres archivos. Cambiar la preferencia de movimiento del sistema actualiza el indicador; la sección de demo usa activación por intersección. El parallax recibe un progreso fijo para una portada estable: no se presenta como una copia del recorrido 3D original.

## Límites y mejoras

- Los hooks publicados conservan el código existente. El valor inicial de movimiento reducido es `false` hasta el primer efecto; no se afirma cumplimiento completo de accesibilidad por incluir este hook.
- `useLazyActivation` presupone disponibilidad de `IntersectionObserver`; para navegadores antiguos convendría añadir un fallback.
- El código seleccionado no incluye los modelos, la escena 3D completa, las configuraciones de despliegue ni los portales operativos.
- La compilación del portafolio valida esta demo, no el despliegue original de temboBT.

## English summary

This selection isolates reusable React behavior from a Next.js immersive-landing foundation. It demonstrates media-query subscriptions, observer lifecycle management and separation of decorative motion from content. The public demo intentionally omits the original 3D scene, business systems and deployment configuration.
