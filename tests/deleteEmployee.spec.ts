import { test, expect } from '../fixtures/baseTest';

test('Delete an employee', async ({ page }) => {
  await page.locator('span:has-text("PIM")').click();
  await page.locator('a:has-text("Employee List")').click();

  await page.fill('input[placeholder="Type for hints..."]', 'John');
  await page.keyboard.press('Enter');

  await page.locator('.oxd-table-card').first().locator('i.bi-trash').click();
  await page.locator('button:has-text("Yes, Delete")').click();

  await expect(page.locator('.oxd-toast')).toBeVisible();
});
