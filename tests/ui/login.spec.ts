import { test, expect } from '../../fixtures/pageFixtures';
import { users, invalidLoginCases } from '../../utils/testData';

test.describe('Login', () => {
  test('successful login with standard user @smoke', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  // Data-driven: one test definition runs once for each case in invalidLoginCases
  for (const { username, password, expectedError } of invalidLoginCases) {
    test(`shows error for invalid login: "${username}" @negative`, async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.login(username, password);
      await loginPage.expectErrorMessage(expectedError);
    });
  }
});