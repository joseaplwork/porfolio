## Purpose
Owns project listing behavior, external project data ingestion, and presentation for the `/projects` route.

## Public API
- `index.ts`
  - `ProjectsPage`: route composition component for `/projects`
  - `ProjectsLoading`: loading fallback component for `/projects`
- `contracts.ts`
  - `Project`
  - `ProjectsResponse`

## Data Contracts
- Source payload must match `{ projects: Project[] }`.
- `Project.tags` is always a string array.
- `Project.demoLink` is optional.

## Dependencies
- `@/entities/project` for canonical `Project` shape.
- `@/shared/config/env.server` for required environment access.
- Next.js server runtime (`next/cache`, `fetch`) for data loading.

## Invariants
- Server fetchers live in `server/` and include `server-only`.
- Input payloads are validated before being returned to UI.
- App route files import only `@/features/projects` public API.

## Change Checklist
- Update `contracts.ts` before touching UI/server payload assumptions.
- Regenerate AI context index after changing exports or route ownership.
- Add/adjust tests under `tests/` for contract or data-path changes.
