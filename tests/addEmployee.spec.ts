import { test, expect, type Page } from '@playwright/test';

test('Add new employee', async ({ page }: { page: Page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

  await page.fill('input[name="firstName"]', 'Amit');
  await page.fill('input[name="lastName"]', 'Sharma');

  // Click Save and wait for network to settle
  await page.locator('button:has-text("Save")').click();
  await page.waitForLoadState('networkidle');

  // Wait for success message with extended timeout
  const successMessage = page.locator('text=Successfully Saved');
  await expect(successMessage).toBeVisible({ timeout: 15000 });
});
