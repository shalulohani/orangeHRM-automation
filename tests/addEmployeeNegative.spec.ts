import { test, expect } from '../fixtures/baseTest';
import { Page } from '@playwright/test';

const invalidData = [
  { firstName: 'Amit123', lastName: 'Sharma' },
  { firstName: '@#$', lastName: 'Sharma' },
  { firstName: '   ', lastName: '   ' }
];

test.describe('Add Employee - Full Negative Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.locator('span:has-text("PIM")').click();
    await page.locator('a:has-text("Add Employee")').click();
    await page.waitForSelector('input[name="firstName"]');
  });

  const saveEmployee = async (page: Page) => {
    await page.locator('button[type="submit"]').click();
  };

  const expectRequiredMessage = async (page: Page) => {
    await expect(page.locator('span.oxd-input-field-error-message').first()).toHaveText('Required');
  };

  // Missing mandatory fields
  test('Missing first name', async ({ page }) => {
    await page.fill('input[name="lastName"]', 'Sharma');
    await saveEmployee(page);
    await expectRequiredMessage(page);
  });

  test('Missing last name', async ({ page }) => {
    await page.fill('input[name="firstName"]', 'Amit');
    await saveEmployee(page);
    await expectRequiredMessage(page);
  });

  test('Missing both names', async ({ page }) => {
    await saveEmployee(page);
    await expectRequiredMessage(page);
  });

  // Very long name
  test('Very long name (boundary)', async ({ page }) => {
    const longName = 'A'.repeat(200);
    await page.fill('input[name="firstName"]', longName);
    await page.fill('input[name="lastName"]', 'Sharma');
    await saveEmployee(page);
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });

  // Duplicate employee ID
  test('Duplicate employee ID', async ({ page }) => {
    await page.fill('input[name="firstName"]', 'Amit');
    await page.fill('input[name="lastName"]', 'Sharma');

    await page.waitForSelector('input[name="employeeId"]');
    const existingID = await page.locator('input[name="employeeId"]').inputValue();

    await page.fill('input[name="employeeId"]', existingID);
    await saveEmployee(page);

    await expect(page).toHaveURL(/viewPersonalDetails/);
  });

  // Upload invalid files
  test('Upload .exe file', async ({ page }) => {
    await page.setInputFiles('input[type="file"]', 'tests/files/Dummy.exe');
    await saveEmployee(page);
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });

  test('Upload >5MB file', async ({ page }) => {
    await page.setInputFiles('input[type="file"]', 'tests/files/large.jpg');
    await saveEmployee(page);
    await expect(page).toHaveURL(/viewPersonalDetails/);
  });

  // Cancel button
  test('Cancel should not create employee', async ({ page }) => {
    await page.fill('input[name="firstName"]', 'CancelTest');
    await page.fill('input[name="lastName"]', 'User');
    await page.locator('button:has-text("Cancel")').click();

    await page.locator('input[placeholder="Type for hints..."]').first().fill('CancelTest');
    await page.keyboard.press('Enter');

    await expect(page.locator('.oxd-table-card')).toHaveCount(0);
  });

  // Invalid names
  for (const data of invalidData) {
    test(`Invalid name: ${data.firstName} ${data.lastName}`, async ({ page }) => {
      await page.fill('input[name="firstName"]', data.firstName);
      await page.fill('input[name="lastName"]', data.lastName);
      await saveEmployee(page);
      await expect(page).toHaveURL(/viewPersonalDetails/);
    });
  }

});
