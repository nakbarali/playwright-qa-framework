# Playwright QA Automation Framework

End-to-end and API test automation framework built with **Playwright** and **TypeScript**, demonstrating modern test automation practices: cross-browser testing, CI/CD integration, and a maintainable project structure.

## Tech stack

- **Playwright** — test runner and browser automation
- **TypeScript** — type-safe test code
- **GitHub Actions** — continuous integration

## What this project demonstrates

- Cross-browser end-to-end testing (Chromium, Firefox, WebKit)
- Automated test execution on every push via CI/CD pipeline
- HTML test reporting for clear pass/fail visibility
- Clean, maintainable project structure following Playwright best practices

## Getting started

Clone the repository and install dependencies:

npm install
npx playwright install --with-deps

## Running tests

npx playwright test - run all tests across all browsers
npx playwright test --headed - run tests with browser UI visible
npx playwright show-report - open the HTML report after a run

## CI/CD

Every push to main automatically triggers the test suite via GitHub Actions. The workflow is defined in .github/workflows/playwright.yml and runs tests across all configured browsers, uploading the HTML report as a build artifact.

## Roadmap

Planned additions to this framework:
- Page Object Model implementation for UI test maintainability
- API testing suite
- Test data fixtures and custom Playwright fixtures
- Allure reporting integration
