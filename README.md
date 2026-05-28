# FuturePath Finance Simulation

An interactive financial advising simulation app for helping people understand how accumulation, distribution, bucket-based drawdowns, and small planning changes can affect long-term outcomes.

V1 is a self-contained static app in `index.html`. It is designed for advisor-client conversations, with plain-language summaries, editable assumptions, and visuals that make financial tradeoffs easier to inspect.

## Product Direction

The app should help users explore questions like:

- How much could my savings grow over time with regular contributions?
- What does compound interest look like visually across decades?
- How do conservative, balanced, growth, and custom portfolio assumptions compare?
- How do projected outcomes compare against benchmarks or inflation?
- What tradeoffs appear when I adjust contribution rates, retirement age, fees, withdrawals, taxes, or risk assumptions?
- In retirement distribution, how sensitive is the income plan to spending, inflation, and return assumptions?

The experience should be visual, interactive, and educational. It should make financial concepts easier to inspect without presenting projections as guarantees.

## Current Features

- Accumulation projection with savings, contribution, fee, inflation, and portfolio model assumptions.
- Scenario comparisons for contribution strategy, retirement age, portfolio risk, and fees.
- Distribution mode for retirement income planning across taxable, retirement, and Roth assets.
- Three-bucket drawdown model with annual withdrawals, growth, refill logic, and year-by-year allocation details.
- Sensitivity sandbox for distribution planning that lets users adjust spending, inflation, and returns.
- Change breakdown that shows each sandbox slider's individual cushion and coverage impact, plus the combined result.
- Printable summaries for advisor-client conversations.

## Future Feature Ideas

- Monte Carlo or range-based simulations to show uncertainty instead of only a single expected line.
- Benchmark overlays such as cash savings, inflation-adjusted value, broad-market indexes, or target-date style allocations.
- Additional tax, account-ordering, and withdrawal strategy assumptions.
- Exportable PDF or document summaries.

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

1. Open `index.html` in a modern browser, or run a local static server and visit the local URL.
2. Use the Accumulation or Distribution mode tabs.
3. Adjust the inputs, then scroll through projection, scenario, sensitivity, and summary sections.
4. Use the browser console to run `runSelfTests()` for calculation smoke tests.

No install step, backend, or build process is required. Charts use Chart.js from a CDN; if the CDN is unavailable, the app still renders metrics, tables, and a chart-unavailable message.

## Development Notes

- Keep financial formulas and assumptions explicit and testable.
- Prefer deterministic scenario tests for core calculations.
- Use realistic default assumptions, but make them easy to inspect and change.
- Document benchmark sources and dates when live or historical market data is introduced.
- Avoid storing secrets, API keys, generated build outputs, or local machine files in git.
