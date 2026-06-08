import { Page, expect } from '@playwright/test';

export class ApplyLeavePage {
  constructor(private page: Page) {}

  async navigateToApplyLeave() {
    await this.page.getByRole('link', { name: 'Leave' }).click();
    await this.page.getByRole('link', { name: 'Apply' }).click();

    // Wait for form to load
    await this.page.waitForSelector('form', { timeout: 15000 });
  }

  async selectLeaveType(type: string) {
    // Click dropdown
    await this.page.locator('label:has-text("Leave Type")')
      .locator('xpath=..')
      .locator('.oxd-select-text-input')
      .click();

    // Select option
    await this.page.getByRole('option', { name: type }).click();
  }

  async selectFromDate(date: string) {
    await this.page.getByPlaceholder('yyyy-mm-dd').first().fill(date);
  }

  async selectToDate(date: string) {
    await this.page.getByPlaceholder('yyyy-mm-dd').last().fill(date);
  }

  async addComment(comment: string) {
    await this.page.getByRole('textbox').fill(comment);
  }

  async submitLeave() {
    await this.page.getByRole('button', { name: 'Apply' }).click();
  }

  async verifySuccess() {
    await expect(this.page.locator('.oxd-toast')).toBeVisible();
    await expect(this.page.locator('.oxd-toast')).toContainText('Success');
  }
}
