import { test, expect } from '@playwright/test';
import { AddEmployeePage } from '../pages/AddEmployeePage';

test('Add new employee', async ({ page }) => {

  const add = new AddEmployeePage(page);

  // Step 1: Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Step 2: Navigate to PIM → Add Employee
  await add.navigateToAddEmployee();

  // Step 3: Generate test data
  const firstName = 'John';
  const middleName = '';
  const lastName = 'Doe' + Math.floor(Math.random() * 10000);

  // Step 4: Fill employee details
  await page.fill('input[name="firstName"]', firstName);
  await page.fill('input[name="middleName"]', middleName);
  await page.fill('input[name="lastName"]', lastName);

  // Step 5: Save employee
  await add.saveEmployee();

  // Step 6: Verify success
  await expect(page.locator('text=Successfully Saved')).toBeVisible();
});
