# Oscar Díaz · Development & Automation Portfolio

**[Español](#español)** · **[English](#english)** · [temboBT case study](docs/tembobt.md) · [FisiGames case study](docs/fisigames.md) · [Postiz](docs/postiz.md) · [Radar](docs/radar.md) · [Biblioteca](docs/biblioteca.md) · [Source provenance](docs/provenance.md)

## Español

Soy **Oscar Omar Díaz Ochoa**, profesional de sistemas de Ecuador. Mi experiencia combina desarrollo de aplicaciones, soporte técnico, atención al cliente y automatización. Este repositorio muestra una selección explicable de trabajo en **temboBT**, **FisiGames** y herramientas privadas alojadas en SERVERSDM.

| Proyecto | Problema | Código para revisar |
|---|---|---|
| temboBT | Organizar una base frontend inmersiva, diferir trabajo y respetar movimiento reducido | [Hooks y componente React](src/tembo) |
| FisiGames | Preparar metadatos del directo y evitar hashtags duplicados | [Módulo original Node.js](src/fisigames/prepare-metadata.cjs) |
| FisiGames Studio / Postiz | Personalizar la identidad y la revisión editorial sobre una plataforma existente | [Caso y captura real](docs/postiz.md) |
| Radar temboBT | Buscar y dar seguimiento a oportunidades; servicio actualmente detenido | [Caso y alcance del conector](docs/radar.md) |
| Biblioteca temboBT | Centralizar referencias y demos de diseño para consulta privada | [Caso y límites de verificación](docs/biblioteca.md) |
| Demo integrada | Mostrar un flujo UI → HTTP → validación → resultado | [React](src/main.jsx), [API Node](server/index.mjs), [pruebas](test) |

Los tres casos adicionales son documentación pública de sistemas privados. Postiz incluye una captura real del encabezado. Radar documenta el contrato de su conector y Biblioteca su alcance de catálogo; sus recorridos privados no se validaron en esta revisión.

### Qué es real y qué es demostración

- Los tres archivos de `src/tembo` y el módulo de `src/fisigames` son una selección del código local existente. Su procedencia se documenta con hashes SHA-256.
- La interfaz de este portafolio, su API HTTP y sus pruebas se prepararon específicamente como **demostración pública**. No son una copia de los servicios desplegados.
- Los proyectos se han trabajado con asistencia de herramientas de programación con IA, revisión y adaptación humana. Este repositorio no afirma autoría exclusiva de cada línea ni desarrollo manual sin IA.
- No se incluyen repositorios originales completos, historial privado, código MCP de terceros, configuraciones de cuentas, archivos de OBS ni información de clientes.
- Las pruebas locales de esta demo no acreditan producción, fiabilidad de emisiones reales ni resultados comerciales.

### Ejecutar

Requisito: Node.js 22 o posterior y npm.

```sh
npm ci
npm run api
```

En otra terminal:

```sh
npm run dev
```

Abre la URL local que muestra Vite. El frontend consume `/api/metadata` mediante el proxy local. La API solo escucha en loopback. La demo no requiere claves, no se conecta a cuentas y **no publica ni inicia directos**.

```sh
npm test
npm run build
python scripts/check_publication.py
```

### Para una entrevista técnica

1. [Explicar temboBT](docs/tembobt.md): estructura de componentes, observers y limpieza de efectos.
2. [Explicar FisiGames](docs/fisigames.md): validación, Unicode, deduplicación y diferencia entre preparar y publicar.
3. Seguir el flujo de [la API](server/index.mjs) a [las pruebas](test/api.test.mjs): JSON incorrecto, límites y errores HTTP.
4. [Revisar seguridad y alcance](SECURITY.md). La demo usa datos ficticios y no contiene una implementación de autenticación de producción.

**Idiomas:** español nativo; lectura de documentación en inglés y conversación limitada. **Perfil:** [github.com/oscardiaz99](https://github.com/oscardiaz99).

## English

I'm Oscar Díaz, an Ecuador-based systems professional with experience in application development, user support, customer service and automation. This portfolio contains selected source files from my temboBT and FisiGames work, plus a small React/Node demonstration built for public review.

The temboBT selection covers reduced-motion preferences, deferred activation and decorative parallax. The FisiGames module validates stream metadata and deduplicates hashtags. The demo adds an HTTP boundary, input validation, readable errors and automated tests. It does not connect to live accounts or broadcast services.

The original systems remain private. AI-assisted development is part of my workflow; this repository distinguishes existing project code from new demonstration code and does not claim unassisted authorship. See the linked case studies for the problem, implementation, trade-offs and verification limits.

Additional case studies cover a FisiGames-branded Postiz review experience, the private Radar opportunity system and a private design library. Postiz is credited as an existing third-party platform. Radar is currently stopped according to its owner; its connector contract is documented without claiming a working deployment. The library access screen was checked, while its authenticated catalog remains private.

### Scope

This is a portfolio of selected excerpts, not a production-ready streaming controller or a full copy of either system. No credentials are required to run it. No runtime data are persisted. Dependencies retain their respective licenses; no blanket open-source license is granted to the original projects by this publication.
