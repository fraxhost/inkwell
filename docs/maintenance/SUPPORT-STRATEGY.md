# docs/maintenance/SUPPORT-STRATEGY.md

## Maintenance Categories in Practice

-Corrective: tracked via the defect log (Lecture 11), prioritized by
  severity, same-day response for security-related defects (Lecture 16).
-Adaptive: dependency updates. Dependabot opens pull requests for new
  versions, and CI's dependency-audit job (Lectures 18-20) fails any
  pull request that leaves a high or critical vulnerability in server/
  or client/. Open Dependabot pull requests are reviewed weekly.
-Perfective: driven by Lecture 23's metrics program. Its complexity
  check found no function above the limit of 8 (highest: 5), so no
  perfective item is queued from it yet; this category activates the
  next time a real measurement flags something.
-Preventive: (a) close Lecture 23's coverage gaps before they hide a
  defect: integration tests for search, and route-level tests for failed
  login and duplicate registration; (b) refactoring
  performed opportunistically whenever a module is touched for other
  reasons, per Lehman's Law of Increasing Complexity — complexity is
  actively fought, not just monitored.

## Proactive Support Triggers

-Defect density (Lecture 23) rising two releases in a row → schedule
  a dedicated stabilization pass before adding new features.
-Any single module's code churn (Lecture 23) exceeding 3x the project
  average → flagged for architectural review, not just a quick patch.
-Test coverage (Lecture 23) falling after a change → the pull request
  that lowered it adds the missing tests before the next release.
