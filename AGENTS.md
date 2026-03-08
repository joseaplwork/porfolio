# AI Collaboration Rules

## Mission
Maintain a feature-first Next.js codebase where AI can generate predictable code with minimal prompt ambiguity.

## Source of truth
- Product/system context: `docs/ai/system-context.md`
- Domain map: `docs/ai/domain-map.yaml`
- Coding and boundary rules: `docs/ai/coding-rules.md`
- Generated feature index: `docs/ai/context-index.generated.md`

## Required workflow for structural changes
1. Update feature public APIs in `index.ts` and `contracts.ts`.
2. Update affected feature `README.md` files.
3. Update/add ADRs under `docs/architecture/adr/` for architecture decisions.
4. Run `npm run context:update`.
5. Run `npm run context:check`, `npm run lint`, `npm run lint:boundaries`, `npm run typecheck`, and `npm run test`.

## Architecture constraints
- App route files import features only via `@/features/<feature>` or `@/features/<feature>/contracts`.
- Deep cross-feature imports are forbidden.
- Server logic must stay in `server/` and include `import 'server-only';`.
- Shared code is only for cross-cutting concerns (`src/shared/*`), never feature business logic.
