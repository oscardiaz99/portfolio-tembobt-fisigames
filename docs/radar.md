# Radar temboBT · buscador privado de oportunidades

## Contexto y aporte

Herramienta de búsqueda y seguimiento de oportunidades trabajada para temboBT en SERVERSDM. El aporte presentado es el trabajo de desarrollo y adaptación de este sistema privado, no la autoría de las ofertas o de sus fuentes externas.

## Alcance documentado

La interfaz del conector disponible para este proyecto describe estas capacidades:

| Capacidad | Función |
|---|---|
| Búsqueda | Filtrar oportunidades guardadas por texto, fuente, etapa o fecha límite |
| Detalle | Consultar una oportunidad y sus notas |
| Seguimiento | Resumir oportunidades por etapa |
| Perfil empresarial | Consultar el perfil guardado para comparar requisitos |
| Notas | Añadir notas con permiso, autor y auditoría |

El conector distingue datos históricos y datos pendientes de confirmación. Añadir una nota no aprueba una decisión ni altera una puntuación. El perfil guardado tampoco acredita por sí solo el cumplimiento de requisitos.

## Flujo conceptual

`Fuentes → oportunidades guardadas → filtros → revisión del detalle → seguimiento por etapa`

Este esquema explica el alcance documentado; no es una captura ni una reconstrucción del código del servidor.

## Estado de verificación

19 de noviembre de 2026: el propietario confirmó que el servicio está detenido. Se revisaron las capacidades declaradas por el conector; la consulta de lectura solicitó reconexión, por lo que no se recuperaron datos ni se validó su funcionamiento actual. No se presentan métricas, ofertas, capturas ni pruebas de producción inventadas.

## Privacidad

No se publica la base de oportunidades, el perfil empresarial, las notas internas, la configuración de SERVERSDM ni credenciales. El repositorio muestra este caso de estudio; no abre acceso al sistema privado.

**English:** Private opportunity search and tracking system for temboBT. Search filters, opportunity details and pipeline summaries are documented from the available connector contract. The service is currently stopped according to its owner; runtime behavior was not verified in this review.
