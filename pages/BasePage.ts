import { Page, Locator } from '@playwright/test';

/** Base class for all page objects, providing shared navigation and wait utilities. */
export class BasePage {
  constructor(protected page: Page) {}

  /** Navigates to a given path relative to the base URL. */
  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  /** Waits until the given locator is visible on the page. */
  async waitForVisible(locator: Locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}