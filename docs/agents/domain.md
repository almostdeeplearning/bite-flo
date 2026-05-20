# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- `CONTEXT.md` at the repo root
- `docs/adr/`
- If `CONTEXT-MAP.md` exists in the future, treat that as the entrypoint for a multi-context layout instead

If any of these files don't exist, proceed silently. Don't block work just because they are missing.

## File structure

Single-context repo:

/
|- CONTEXT.md
|- docs/adr/
`- src/

## Use the glossary's vocabulary

When naming domain concepts, prefer the vocabulary defined in `CONTEXT.md`.

## Flag ADR conflicts

If a proposal conflicts with an ADR, surface that conflict explicitly instead of silently overriding it.
