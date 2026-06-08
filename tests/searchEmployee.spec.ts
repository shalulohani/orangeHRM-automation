import { test, expect } from '../fixtures/baseTest';

test('Search employee by name', async ({ page }) => {
  await page.locator('span:has-text("PIM")').click();
  await page.locator('a:has-text("Employee List")').click();

  await page.locator('input[placeholder="Type for hints..."]').first().fill('Linda Anderson');
  await page.keyboard.press('Enter');

  await expect(page.locator('.oxd-table-card')).toHaveCount(1, { timeout: 15000 });
});
