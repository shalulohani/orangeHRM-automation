import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/', {
      waitUntil: 'domcontentloaded'
    });
    await this.page.waitForSelector("input[placeholder='Username']", { timeout: 30000 });
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForSelector("h6:has-text('Dashboard')", { timeout: 40000 });
  }
}
