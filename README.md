# Nexus Corp App

The Nexus Corp internal parcel management application.

## Current State

- **Deployments**: manual, once a month — someone SSHs into the server and runs the app by hand
- **Tests**: none are passing — the test file exists but has bugs that haven't been fixed
- **Staging environment**: none — changes go straight to production
- **CI/CD**: a GitHub Actions workflow exists but only installs dependencies; there is no automated test or deploy step

## Routes

| Method | Path           | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | App info and version     |
| GET    | `/health`      | Health check             |
| GET    | `/api/orders`  | List of parcel orders    |
| GET    | `/api/metrics` | Current DORA metrics     |

## DORA Metrics (current baseline)

| Metric                  | Value          |
|-------------------------|----------------|
| Deployment Frequency    | 1x per month   |
| Lead Time for Changes   | 43 days        |
| Change Failure Rate     | 42%            |
| MTTR                    | 72 hours       |

These numbers represent the starting point. The goal of the DevOps Flow Lab missions is to improve all four metrics.

## Getting Started

```bash
cp .env.example .env
npm install
npm start
```

## Running Tests

```bash
npm test
```

> Note: tests are intentionally failing as part of Mission M-02. Your job is to fix them.

## Docker

```bash
docker compose up
```
