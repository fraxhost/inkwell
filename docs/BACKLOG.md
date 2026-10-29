# Inkwell Product Backlog

Definition of Done: see README.md

| ID | User Story | Priority | Points | Status | Notes |
| ---- | ------------ | ---------- | -------- | -------- | ------- |
| US-01 | As a visitor, I want to register an account... | High | 3 | Requirements Defined | See use-cases.md |
| US-02 | As a registered user, I want to log in... | High | 5 | Requirements Defined | See use-cases.md |
| US-03 | As an author, I want to write and publish... | High | 5 | Requirements Defined | Scope negotiated: plain text only |
| US-04 | As a reader, I want to browse a public feed... | High | 3 | Requirements Defined | See use-cases.md |
| US-05 | As a reader, I want to comment on a post... | Medium | 3 | Backlog | |
| US-06 | As a reader, I want to follow an author... | Medium | 3 | Backlog | |
| US-07 | As an author, I want basic analytics... | Low | 5 | Backlog | |

## Estimates (Lecture 24 — decomposition)

| Story | Decomposed Sub-Tasks | Est. (person-days) |
| --- | --- | --- |
| US-05 Comments | Schema + migration (0.5), Service+Repo (1), Routes (0.5), Client UI (1.5), Tests (1) | 4.5 |
| US-06 Follow/Feed | Schema (1), Feed algorithm design spike (1), Service+Repo (2), Client UI (2), Tests (1.5) | 7.5 |
| US-08 Avatar Upload | Storage integration spike (1), Service (1.5), Client upload UI (1.5), Tests (1) | 5 |
| US-09 Password Reset | Email provider evaluation (0.5), Service (1), Routes (0.5), Client UI (1), Tests (1) | 4 |
