import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to OrangeHRM and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await expect(page.locator("h6:has-text('Dashboard')")).toBeVisible();
});
