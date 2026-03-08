## Purpose
Owns personal profile presentation on the home route, including introduction copy and external social/profile links.

## Public API
- `index.ts`
  - `PersonalIntroduction`
  - `PersonalIntroductionProps`
- `contracts.ts`
  - `PersonalIntroductionProps`

## Data Contracts
- `PersonalIntroductionProps.shouldShowProjectsLink` toggles visibility of the projects CTA.

## Dependencies
- Next.js `Link` and font utilities.
- Environment variables for CV and social URLs.

## Invariants
- Public imports use only `@/features/profile`.
- UI files stay in `ui/`; no data fetching or server provider logic in this feature.
- Links always render safely with fallback hrefs.

## Change Checklist
- Update `contracts.ts` when changing component input shape.
- Regenerate context index after public export changes.
- Add tests when link rendering or CTA behavior changes.
