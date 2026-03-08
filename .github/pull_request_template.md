## Layer 1: Functional (Reviewer Quick Read)

### User/Product outcome
_What user-visible value or workflow is improved?_

### Scope
_What is included in this PR and what is explicitly out of scope?_

### Acceptance criteria
- [ ] Functional requirement 1
- [ ] Functional requirement 2

## Layer 2: Technical (Implementation Review)

### Approach
_Explain the implementation strategy and why it was chosen._

### Key changes
- _List core modules/files touched and their responsibilities._

### Interfaces and contracts
_Describe API/type/schema/env/config changes, if any._

### Migration and compatibility
_Describe migration steps, backward compatibility, and rollout constraints._

## Layer 3: Behavioral (Runtime and Risk Review)

### Before vs after behavior
_Describe behavioral differences at runtime (including defaults/fallbacks)._

### Edge cases and failure modes
_Describe non-happy paths and expected system behavior._

### Risks and mitigations
_Describe functional, technical, or operational risk and mitigation._

## Validation

- [ ] `npm run lint`
- [ ] `npm run lint:boundaries`
- [ ] `npm run typecheck`
- [ ] `npm run test`
- [ ] `npm run test:e2e:smoke`
- [ ] `npm run context:check`

## Context and documentation updates

- [ ] Updated affected feature `README.md` files
- [ ] Updated or added ADR in `docs/architecture/adr/` when architecture changed
- [ ] Ran `npm run context:update` and committed `docs/ai/context-index.generated.md`
- [ ] PR description includes all 3 layers (Functional, Technical, Behavioral)

## Notes

_Any additional reviewer context._
