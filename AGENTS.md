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

## Pull request authoring standard
All PRs must follow the 3-layer description format in `.github/pull_request_template.md`.

Required layers (in order):
1. Functional: user/product outcome, scope, acceptance criteria.
2. Technical: implementation approach, key changes, interfaces/contracts, compatibility.
3. Behavioral: before vs after runtime behavior, edge cases/failure modes, risks/mitigations.

When Codex creates a PR with `gh pr create` or `gh pr edit`, it must include all 3 layers explicitly.

## Architecture constraints
- App route files import features only via `@/features/<feature>` or `@/features/<feature>/contracts`.
- Deep cross-feature imports are forbidden.
- Server logic must stay in `server/` and include `import 'server-only';`.
- Shared code is only for cross-cutting concerns (`src/shared/*`), never feature business logic.
