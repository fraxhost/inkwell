# docs/metrics/METRICS-PROGRAM.md

| Metric | Category | Goal It Serves | Collection |
| --- | --- | --- | --- |
| Test coverage % | Testing | Confirm the testing pyramid actually exercises the codebase, not just that tests exist | Automated, via CI |
| Cyclomatic complexity per function | Quality | Flag functions that may need refactoring before they become defect-prone | Automated, via a linter rule |
| Defect density (per KLOC) | Testing | Track whether code quality is improving or degrading release over release | Semi-automated, from the defect log |
| Story points completed per sprint | Project | Improve estimation accuracy over time | Manual, from sprint records |
| MTTR (Mean Time to Repair) | Maintenance | Confirm the team responds to reported defects promptly | Manual, from the defect log |

## Deliberately NOT measured

-Raw lines of code — not tied to any specific goal for
  Inkwell at its current size; would only encourage the wrong incentive
  (Goodhart's Law) if ever used to judge individual productivity.
-Commits per day per contributor — a classic example of a metric that
  looks meaningful but actively encourages bad behavior (many small,
  low-value commits) if ever treated as a target.

## Findings

-Test coverage: 78.7% of statements, 58.6% of branches (Section 5.2),
  up from 73.2% / 48.3% before Lecture 22. Gaps: search
  (`PostRepository.searchPublished()`, the search strategy) has no tests
  at all; the login and register routes' error responses are not run by
  the server tests (only by E2E, which Jest does not count). Next: add
  search integration tests, and route-level tests for failed login and
  duplicate registration.
-Cyclomatic complexity: no function above the limit of 8. Highest: 5
  (`requireAuth`, the `/auth/register` route handler). No action needed;
  re-check as features are added.

## Production/Staging Observability (via Render)

-CPU, memory and request counts: read directly from each service's
  Metrics page in Render (free plan: 7 days of history; no latency
  percentiles). No custom instrumentation needed at this scale.
-Latency: taken from Lecture 21's k6 runs, correlated against Render's
  CPU/memory graphs for the same period, to tell an application-level
  bottleneck (latency up, resources flat) from a resource-level one
  (memory climbing steadily under sustained load).
