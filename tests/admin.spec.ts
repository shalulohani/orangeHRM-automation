import { test, expect } from '@playwright/test';

test('Add new system user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Hover over Admin to trigger submenu
  const adminMenu = page.locator('nav span:has-text("Admin")');
  await adminMenu.hover();

  // Wait for submenu to appear
  const userMgmt = page.locator('a:has-text("User Management")');
  await userMgmt.waitFor({ state: 'visible', timeout: 60000 });

  // Click through to Users
  await userMgmt.click();
  await page.locator('a:has-text("Users")').click();

  // Verify navigation succeeded
  await expect(page).toHaveURL(/viewSystemUsers/);
});
