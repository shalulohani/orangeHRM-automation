import { Page, expect } from '@playwright/test';

export class DeleteEmployeePage {
  constructor(private page: Page) {}

  async deleteEmployeeByName(name: string) {
    // Wait for table to load
    await this.page.waitForSelector('.oxd-table-row', { timeout: 60000 });

    // Find the first matching row (or refine by column)
    const employeeRow = this.page.locator(`.oxd-table-row:has-text("${name}")`).first();

    // Verify the row is visible
    await expect(employeeRow).toBeVisible();

    // Click the delete icon inside that row
    await employeeRow.locator('button i.bi-trash').click();

    // Confirm deletion
    await this.page.click('button:has-text("Yes, Delete")');

    // Wait for success toast
    await this.page.waitForSelector('.oxd-toast', { state: 'visible', timeout: 60000 });
    const toast = this.page.locator('.oxd-toast');
    await expect(toast).toContainText('Successfully Deleted');
  }
}
