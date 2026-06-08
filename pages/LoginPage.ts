import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async login(username: string, password: string) {
    await this.goto();

    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.page.click('button[type="submit"]')
    ]);

    await this.page.waitForSelector("h6:has-text('Dashboard')", { timeout: 20000 });
  }
}
