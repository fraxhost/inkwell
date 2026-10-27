# docs/process/SCM-POLICY.md

## Branching Strategy (Section 5.1)

Inkwell uses GitHub Flow:

- `main` is always deployable.
- All work happens on short-lived branches named `<type>/<short-description>`,
  e.g. `feature/tag-search`, `fix/authorid-spoofing`.
- Branches merge via pull request, requiring:
  - All automated tests passing
  - At least one review approval
- Branches are deleted after merge.

## Commit Message Conventions (Section 4.3's "commit," made disciplined)

Inkwell follows Conventional Commits:
  <type>(<scope>): <short summary>

Types: feat, fix, test, docs, refactor, chore, security
Examples:
  feat(posts): add tag-based search
  security(auth): fix authorId spoofing vulnerability
