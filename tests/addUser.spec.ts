import { test, expect } from '@playwright/test';

test('Add new system user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Navigate to Admin section
  await page.locator('nav').locator('span:has-text("Admin")').click();

  // Wait longer for submenu to appear
  await page.waitForSelector('a:has-text("User Management")', { timeout: 45000 });

  // Add a small pause to stabilize rendering
  await page.waitForTimeout(2000);

  // Continue navigation
  await page.locator('a:has-text("User Management")').click();
  await page.locator('a:has-text("Users")').click();

  // Verify navigation succeeded
  await expect(page).toHaveURL(/viewSystemUsers/);
});
