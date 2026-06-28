# Playwright QA Automation Framework

End-to-end and API test automation framework built with Playwright and TypeScript, demonstrating production-style test architecture: Page Object Model, custom fixtures, tagged test suites, and CI/CD integration.

## Tech stack

- Playwright - test runner and browser automation
- TypeScript - type-safe test code
- GitHub Actions - continuous integration
- Allure - test reporting

## What this project demonstrates

- UI test automation using Page Object Model (login flows, product catalog, cart behavior)
- API test automation covering full CRUD operations (GET, POST, PUT, DELETE)
- Custom Playwright fixtures for automatic page object injection
- Test tagging (smoke, regression, negative) for selective test execution
- Cross-browser testing (Chromium, Firefox, WebKit)
- Automated test execution on every push via CI/CD pipeline
- Allure and HTML reporting for clear pass/fail visibility

## Project structure

pages/ contains Page Object classes (BasePage, LoginPage, InventoryPage)
fixtures/ contains custom Playwright fixtures for page object injection
utils/ contains shared test data
tests/ui/ contains UI test specs (login, inventory)
tests/api/ contains API test specs (full CRUD coverage)
.github/workflows/ contains the CI pipeline definition

## Getting started

Clone the repository and install dependencies:

npm install
npx playwright install --with-deps

## Running tests

npm test - run all tests across all browsers
npx playwright test tests/ui - run only UI tests
npx playwright test tests/api - run only API tests
npx playwright test --grep @smoke - run only smoke tests
npx playwright test --grep @regression - run only regression tests
npx playwright test --headed - run tests with browser UI visible

## Reports

npx playwright show-report - open the default Playwright HTML report
npm run allure:generate - generate the Allure report from test results
npm run allure:open - open the generated Allure report

## CI/CD

Every push to main automatically triggers the test suite via GitHub Actions. The workflow is defined in .github/workflows/playwright.yml and runs tests across all configured browsers.

## Why this project

This framework reflects how QA and SDET teams structure real automation suites: separation of concerns between pages, tests, and data, reusable fixtures instead of duplicated setup code, tagged tests for fast feedback loops, and a CI pipeline that catches regressions automatically.
