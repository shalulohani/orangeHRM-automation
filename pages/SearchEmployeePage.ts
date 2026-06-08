import { Page, expect } from '@playwright/test';

export class SearchEmployeePage {
  constructor(private page: Page) {}

  async searchEmployeeByName(name: string) {
    // Wait for search input
    await this.page.waitForSelector('input[placeholder="Type for hints..."]', { timeout: 60000 });

    // Fill search field
    await this.page.fill('input[placeholder="Type for hints..."]', name);

    // Click search button
    await this.page.click('button[type="submit"]');

    // Wait for table to load
    await this.page.waitForSelector('.oxd-table-row', { timeout: 60000 });

    // Locate the row containing the employee name
    const employeeRow = this.page.locator(`.oxd-table-row:has-text("${name}")`).first();

    // Verify the row is visible
    await expect(employeeRow).toBeVisible();

    // Verify the name appears in the correct cell
    const nameCell = employeeRow.locator('.oxd-table-cell').nth(1); // adjust index if needed
    await expect(nameCell).toContainText(name);
  }
}
