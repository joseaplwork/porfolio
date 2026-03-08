## Purpose
Defines feature-flag contracts and server-side providers used to gate behavior in routes and features.

## Public API
- `index.ts`
  - `featureFlags`
  - `FeatureFlagName`
  - `FeatureFlagProvider`
  - `FeatureFlagSnapshot`
- `contracts.ts`
  - `FEATURE_FLAGS`
  - `FeatureFlagName`
  - `FeatureFlagSnapshot`
  - `FeatureFlagProvider`

## Data Contracts
- `FEATURE_FLAGS` is the source of truth for allowed flag names.
- Providers must implement `init()` then support deterministic `get(name)` lookups.
- Snapshot shape is `Record<FeatureFlagName, boolean>`.

## Dependencies
- `@/shared/lib/hypertune-auto-generated/*` for Hypertune schema bindings.
- `@/shared/config/env.server` for required environment access.
- Next.js server runtime and `server-only` boundaries.

## Invariants
- Provider and service code remains in `server/` and imports `server-only`.
- Consumers call `init()` before `get()`.
- `FEATURE_FLAGS_PROVIDER` controls runtime provider selection (`hypertune` default, `jsonsilo`, `static`).
- Cross-feature consumers import only `@/features/feature-flags` public API.

## Change Checklist
- Update `FEATURE_FLAGS` and contracts together.
- Regenerate context index after changing exports/providers.
- Add/adjust tests under `tests/` when provider/service behavior changes.
