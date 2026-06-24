import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/** Page object for the login screen on saucedemo.com. */
export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /** Opens the login page. */
  async open() {
    await this.goto('https://www.saucedemo.com');
  }

  /** Fills in credentials and submits the login form. */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /** Asserts that the login error message contains the given text. */
  async expectErrorMessage(text: string) {
    await expect(this.errorMessage).toContainText(text);
  }
}