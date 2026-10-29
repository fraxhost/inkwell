# docs/process/RISK-REGISTER.md

| ID | Risk | Category | Probability | Impact | Exposure | Refinement (4.10) |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | Avatar storage integration has unfamiliar failure modes | Technical | Medium | High | High | Refined: (a) provider rate limits undocumented, (b) upload failure error handling untested |
| R-02 | Follow/feed algorithm estimate proves optimistic | Project | Medium | Medium | Medium | Refined: feed query performance at scale is the specific unknown, not the UI |
| R-03 | Password reset needs an email provider not yet chosen | Technical | Low | Medium | Low | Refined: deliverability (spam filtering) is the specific concern, not API integration itself |
