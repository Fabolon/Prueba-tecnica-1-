# Front1 – Gestión de Departamentos y Trabajadores

Aplicación Angular (CLI v20) pensada como base para un desafío de módulo. Permite administrar departamentos y trabajadores de manera totalmente local usando servicios in-memory.

## Características
- **Componentes standalone**:
  - `DepartamentosListComponent`: lista y elimina departamentos.
  - `DepartamentoFormComponent`: crea/edita departamentos.
  - `TrabajadoresComponent` y `DeparTrabajadoresComponent`: muestran trabajadores y filtran por departamento.
- **Servicios y modelos**:
  - `DepartamentoService` y `TrabajadoresService` exponen operaciones CRUD en memoria.
  - Interfaces `Departamento` y `Trabajador` centralizan el tipado.
- **Sin pruebas unitarias** (se generó el proyecto con `--skip-tests`).

## Requisitos
- Node.js 18+
- npm 9+

## Scripts disponibles
```bash
# Desarrollo (http://localhost:4200)
npm start

# Compilación producción
npm run build
```
> Los servicios usan datos locales, por lo que no se requiere backend.

## Estructura relevante
```
src/app/
  app.component.{ts,html,css}
  app.module.ts
  app-routing.module.ts
  app.routes.ts
  models/
    departamento.model.ts
    trabajador.model.ts
  services/
    departamento.service.ts
    trabajadores.service.ts
  components/
    departamentos/
      departamentos-lista.{ts,html}
      departamentos-form.{ts,html}
    trabajadores/
      trabajadores-form.{ts,html}
    depar-trabajadores/
      depar-trabajadores.{ts,html}
```

## Próximos pasos sugeridos
1. Integrar routing y vistas para navegar entre listas y formularios.
2. Conectar los servicios a una API real (REST o GraphQL).
3. Añadir validaciones reactivas y feedback visual.

¡Listo para extenderse según las necesidades del desafío!***
