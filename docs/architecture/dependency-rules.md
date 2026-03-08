# Dependency Rules

## Allowed dependency direction
1. `src/app` -> `src/features` public APIs only.
2. `src/features/*` -> same-feature internals via relative imports.
3. `src/features/*` -> other features via public APIs only.
4. `src/features/*` -> `src/entities/*` and `src/shared/*`.

## Forbidden patterns
- Deep imports into another feature internals.
- Route files importing `model/`, `server/`, `ui/`, or `tests/` inside features.
- Business logic in `src/shared/*` that belongs to a specific feature.

## Enforcement
- ESLint `no-restricted-imports` for deep feature alias imports.
- `scripts/ai/check-boundaries.mjs` as CI and test gate.
