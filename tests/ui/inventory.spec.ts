import { test, expect } from '../../fixtures/pageFixtures';
import { users } from '../../utils/testData';

test.describe('Inventory', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
  });

  test('sorts products by price low to high @regression', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.getItemPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test('adds item to cart and updates badge count @smoke', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });
});