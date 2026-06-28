# Playwright QA Automation Framework

End-to-end and API test automation framework built with Playwright and TypeScript, demonstrating modern test automation practices: Page Object Model architecture, cross-browser testing, and CI/CD integration.

## Tech stack

- Playwright - test runner and browser automation
- TypeScript - type-safe test code
- GitHub Actions - continuous integration

## What this project demonstrates

- UI test automation using Page Object Model (login flows, product catalog, cart behavior)
- API test automation (CRUD operations, status code validation)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Automated test execution on every push via CI/CD pipeline
- HTML test reporting for clear pass/fail visibility

## Project structure

pages/ contains Page Object classes (BasePage, LoginPage, InventoryPage)
utils/ contains shared test data
tests/ui/ contains UI test specs (login, inventory)
tests/api/ contains API test specs
.github/workflows/ contains the CI pipeline definition

## Getting started

Clone the repository and install dependencies:

npm install
npx playwright install --with-deps

## Running tests

npx playwright test - run all tests across all browsers
npx playwright test tests/ui - run only UI tests
npx playwright test tests/api - run only API tests
npx playwright test --headed - run tests with browser UI visible
npx playwright show-report - open the HTML report after a run

## CI/CD

Every push to main automatically triggers the test suite via GitHub Actions. The workflow is defined in .github/workflows/playwright.yml and runs tests across all configured browsers.

## Roadmap

Planned additions to this framework:
- Allure reporting integration
- Test data fixtures with custom Playwright fixtures
- Additional API test coverage
