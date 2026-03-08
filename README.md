# Portfolio (AI-First Next.js Baseline)

This repository is structured as an AI-ready Next.js App Router baseline with strict feature boundaries, generated context artifacts, and merge-time quality gates.

## Architecture
- `src/app`: route composition only.
- `src/features`: feature slices with public APIs (`index.ts`, `contracts.ts`).
- `src/entities`: cross-feature entity contracts.
- `src/shared`: cross-cutting code only.

## Core commands
```bash
npm run dev
npm run lint
npm run lint:boundaries
npm run typecheck
npm run test
npm run test:e2e:smoke
npm run context:update
npm run context:check
```

## AI context files
- `AGENTS.md`
- `docs/ai/system-context.md`
- `docs/ai/domain-map.yaml`
- `docs/ai/coding-rules.md`
- `docs/ai/context-index.generated.md` (generated)

## Feature contract policy
Every feature under `src/features/<feature>` must include:
- `index.ts`
- `contracts.ts`
- `README.md` with required sections:
  - Purpose
  - Public API
  - Data Contracts
  - Dependencies
  - Invariants
  - Change Checklist

## Scaffolding a feature
```bash
npm run scaffold:feature -- <feature-name>
```

## CI gates
CI blocks merges unless all of the following pass:
- lint
- boundary checks
- typecheck
- tests
- e2e smoke tests
- context sync check
