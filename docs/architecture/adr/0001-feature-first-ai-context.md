# ADR 0001: Feature-First Structure with AI Context Gates

## Status
Accepted

## Context
The repository required a predictable structure for AI-assisted code generation and maintenance, with strict context synchronization and merge-time enforcement.

## Decision
Adopt a feature-first architecture with:
- Public feature APIs (`index.ts`, `contracts.ts`)
- Feature README contracts
- Generated context index and sync checks
- Boundary lint/check scripts and CI enforcement

## Consequences
- Higher initial structure overhead.
- Lower ambiguity for human and AI contributors.
- Reduced risk of undocumented architectural drift.
