import { test, expect } from '../fixtures/baseTest';

test('Add new system user', async ({ page }) => {
  await page.locator('nav').locator('span:has-text("Admin")').click();
  await page.waitForSelector('a:has-text("User Management")', { timeout: 20000 });
  await page.locator('a:has-text("User Management")').click();
  await page.locator('a:has-text("Users")').click();

  await page.locator('button:has-text("Add")').click();

  await page.fill('input[name="username"]', 'AdminUser01');
  await page.fill('input[type="password"]', 'AdminPass123!');
  await page.fill('input[type="password"]:right-of(:text("Confirm Password"))', 'AdminPass123!');

  await page.locator('button[type="submit"]').click();
  await expect(page.locator('.oxd-toast')).toBeVisible({ timeout: 15000 });
});
