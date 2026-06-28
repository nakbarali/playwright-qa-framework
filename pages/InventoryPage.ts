import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/** Page object for the product listing (inventory) screen on saucedemo.com. */
export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  /** Adds a product to the cart by its visible name. */
  async addItemToCartByName(name: string) {
    const item = this.inventoryItems.filter({ hasText: name });
    await item.locator('button', { hasText: 'Add to cart' }).click();
  }

  /** Changes the product sort order (e.g. price low to high). */
  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  /** Returns the prices of all visible products as numbers. */
  async getItemPrices(): Promise<number[]> {
    const priceTexts = await this.inventoryItems.locator('.inventory_item_price').allTextContents();
    return priceTexts.map((p) => parseFloat(p.replace('$', '')));
  }
}