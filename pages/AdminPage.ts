import { Page, expect } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async navigateToAdmin() {
    // Click the Admin tab
    await this.page.getByRole('link', { name: 'Admin' }).click();

    // Wait for the sidebar or menu to appear
    await this.page.waitForSelector('text=User Management', { timeout: 60000 });

    // Try clicking User Management → Users with retries
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await this.page.getByText('User Management').click({ force: true });
        await this.page.getByText('Users').click({ force: true });
        break;
      } catch (error) {
        console.log(`Retrying navigation attempt ${attempt + 1}`);
        await this.page.waitForTimeout(1000);
      }
    }
  }

  async addNewUser(username: string, password: string, role: string) {
    await this.page.click('button:has-text("Add")');
    await this.page.selectOption('select[name="role"]', role);
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="confirmPassword"]', password);
    await this.page.click('button[type="submit"]');
  }

  async verifySuccess() {
    await this.page.waitForSelector('.oxd-toast', { state: 'visible', timeout: 60000 });
    const toast = this.page.locator('.oxd-toast');
    await expect(toast).toContainText('Successfully Saved');
  }
}
