# Finance Simulation

An interactive financial advising simulation app for helping people understand how savings, investing, compound interest, portfolio assumptions, benchmarks, and planning choices can change long-term outcomes.

This repository is intentionally starting with product and collaboration scaffolding before locking in the application stack. The goal is to create enough structure to support design exploration, technical planning, and implementation without committing too early to a framework.

## Product Direction

The app should help users explore questions like:

- How much could my savings grow over time with regular contributions?
- What does compound interest look like visually across decades?
- How do conservative, balanced, growth, and custom portfolio assumptions compare?
- How do projected outcomes compare against benchmarks or inflation?
- What tradeoffs appear when I adjust contribution rates, retirement age, fees, withdrawals, taxes, or risk assumptions?

The experience should be visual, interactive, and educational. It should make financial concepts easier to inspect without presenting projections as guarantees.

## Early Feature Ideas

- Customizable inputs for starting balance, contributions, time horizon, expected return, volatility, fees, inflation, and tax assumptions.
- Animated savings and investment growth over time.
- Scenario comparisons for different contribution strategies and portfolio models.
- Benchmark overlays such as cash savings, inflation-adjusted value, broad-market indexes, or target-date style allocations.
- Monte Carlo or range-based simulations to show uncertainty instead of only a single expected line.
- Milestone callouts for savings goals, retirement readiness, drawdown periods, and risk events.
- Exportable summaries for advisor-client conversations.

## Design Principles

- Make assumptions visible and editable.
- Show uncertainty clearly.
- Prefer plain-language explanations over jargon.
- Separate education from advice.
- Keep charts readable and grounded in the user's inputs.
- Treat projections as planning tools, not predictions.

## Repository Structure

Current structure:

```text
.
|-- README.md
|-- index.html
|-- docs/
|   `-- product-brief.md
|-- .github/
|   `-- pull_request_template.md
`-- .gitignore
```

Future implementation directories may include:

```text
src/          Application source
tests/        Unit, integration, and simulation tests
public/       Static assets
docs/         Product, design, and technical notes
scripts/      Local development and data utilities
```

## Financial Disclaimer

This project is for financial education and simulation only. It should not provide personalized financial, investment, tax, or legal advice. Any production version should include clear disclosures, assumption notes, and validation from qualified financial and legal reviewers.

## Getting Started

V1 is a self-contained static app.

1. Open `index.html` in a modern browser.
2. Adjust the inputs in the Inputs tab.
3. Review the Projection, Scenario Comparison, and Client Summary tabs.
4. Use the browser console to run `runSelfTests()` for calculation smoke tests.

No install step, backend, or build process is required. Charts use Chart.js from a CDN; if the CDN is unavailable, the app still renders metrics, tables, and a chart-unavailable message.

## Development Notes

- Keep financial formulas and assumptions explicit and testable.
- Prefer deterministic scenario tests for core calculations.
- Use realistic default assumptions, but make them easy to inspect and change.
- Document benchmark sources and dates when live or historical market data is introduced.
- Avoid storing secrets, API keys, generated build outputs, or local machine files in git.
