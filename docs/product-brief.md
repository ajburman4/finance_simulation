# Product Brief

## Purpose

Finance Simulation is an interactive planning and education app for financial advising conversations. It should help people understand how savings and investments can evolve over time under different assumptions.

## Audience

- Individuals learning how saving and investing decisions compound over time.
- Financial advisors who want a visual planning aid for client conversations.
- Product and design collaborators exploring clear ways to communicate risk, time, and tradeoffs.

## Core User Jobs

- Enter a current financial starting point and future savings behavior.
- Compare multiple savings and portfolio scenarios.
- Understand the impact of time, contributions, fees, inflation, and market assumptions.
- See the difference between nominal growth and inflation-adjusted purchasing power.
- Discuss tradeoffs using visuals that are clear enough for non-technical users.

## Initial Simulation Concepts

- Fixed return projection for simple education.
- Portfolio-model projection with expected return and volatility assumptions.
- Benchmark comparison against cash, inflation, or selected market proxies.
- Scenario table showing ending balance, total contributions, investment growth, and estimated purchasing power.
- Optional uncertainty bands or Monte Carlo ranges for advanced views.

## Design Questions

- What should the first screen optimize for: quick education, advisor workflow, or detailed planning?
- Which charts make compound growth easiest to understand?
- How should the app explain uncertainty without overwhelming new users?
- What assumptions should be visible by default versus placed behind advanced controls?
- Should benchmark data be static, sourced from uploaded files, or connected to a market-data provider?

## Technical Questions

- Which frontend framework best supports responsive controls, animation, and charting?
- Should calculation logic be shared between frontend and backend, or run fully client-side at first?
- What precision and validation rules should financial formulas use?
- What test fixtures are needed to verify calculations across edge cases?
- What data sources, if any, will be required for benchmarks?

## Non-Goals For The First Pass

- Personalized financial advice.
- Account aggregation or brokerage integrations.
- Live trading, transaction execution, or recommendation engines.
- Production-grade tax optimization.
- User authentication or persistence until the initial app workflow is defined.

