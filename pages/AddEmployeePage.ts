import { Page } from '@playwright/test';

export class AddEmployeePage {
  constructor(private page: Page) {}

  async navigateToAddEmployee() {
    await this.page.getByRole('link', { name: 'PIM' }).click();
    await this.page.getByRole('link', { name: 'Add Employee' }).click();
  }

  async enterFirstName(firstName: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.getByPlaceholder('Last Name').fill(lastName);
  }

  async clearEmployeeId() {
    await this.page.locator('label:has-text("Employee Id")')
      .locator('xpath=..')
      .locator('input')
      .fill('');
  }

  async saveEmployee() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifyEmployeeCreated() {
    await this.page.locator('h6:has-text("Personal Details")').waitFor({ timeout: 60000 });
  }
}
