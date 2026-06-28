import { test, expect } from '../../fixtures/pageFixtures';
import { users } from '../../utils/testData';

test.describe('Login', () => {
  test('successful login with standard user @smoke', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('shows error for locked out user @negative', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.expectErrorMessage('locked out');
  });
});