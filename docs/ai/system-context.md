# System Context

## Product
This repository hosts a Next.js App Router portfolio baseline that is intentionally structured to scale into LMS-level complexity.

## Architecture model
- Feature-first slices under `src/features/*`.
- Route composition under `src/app/*`.
- Cross-domain entities under `src/entities/*`.
- Cross-cutting concerns under `src/shared/*`.

## Current owned capabilities
- `projects`: external project ingestion and project catalog rendering for `/projects`.
- `feature-flags`: provider-agnostic feature-flag resolution for gated behavior.
- `profile`: home page personal introduction and external links.

## Non-negotiable invariants
- Public feature APIs are `index.ts` and `contracts.ts` only.
- Route files compose features; they do not contain feature business logic.
- Server modules include `server-only` and stay under `server/`.
- Context files and generated index must remain synchronized.
