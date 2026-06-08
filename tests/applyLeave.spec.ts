import { test, expect } from '../fixtures/baseTest';

test('Apply for leave', async ({ page }) => {
  await page.locator('span:has-text("Leave")').click();
  await page.locator('a:has-text("Apply")').click();

  await page.waitForSelector('div[role="listbox"]', { timeout: 20000 });
  await page.locator('div[role="listbox"]').first().click();
  await page.locator('span:has-text("CAN - Personal")').click();

  await page.fill('input[placeholder="yyyy-mm-dd"]', '2024-12-25');
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.oxd-toast')).toBeVisible({ timeout: 15000 });
});
