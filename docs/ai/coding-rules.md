# Coding Rules

## Imports and boundaries
- Use aliases: `@/features/*`, `@/entities/*`, `@/shared/*`.
- Import feature internals only through relative paths inside the same feature.
- Cross-feature imports must target `@/features/<feature>` or `@/features/<feature>/contracts`.

## Feature contract policy
- Every feature must include:
  - `index.ts`
  - `contracts.ts`
  - `README.md` with required sections.
- Public API changes require README + context index updates.

## Server policy
- Server modules live in `server/` and import `server-only`.
- Environment access uses `@/shared/config/env.server` helpers.

## Context synchronization
- Run `npm run context:update` after feature export, route ownership, or dependency changes.
- `npm run context:check` must pass before merge.

## Pull request description policy
PR descriptions are required to follow a 3-layer review structure:
1. Functional layer: user/product outcome, scope, acceptance criteria.
2. Technical layer: implementation approach, key changes, interfaces/contracts, compatibility/migration.
3. Behavioral layer: runtime behavior changes, edge cases/failure modes, risks/mitigations.

Use `.github/pull_request_template.md` as the canonical PR description format.
