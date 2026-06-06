import { Page } from '@playwright/test';

export class AdminPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToJobTitles() {
    await this.page.locator("a[href*='admin']").first().click();
    await this.page.locator(".oxd-topbar-body-nav-tab:has-text('Job')").click();
    await this.page.locator("a:has-text('Job Titles')").click();
  }

  async addJobTitle(title: string) {
    await this.navigateToJobTitles();
    await this.page.locator("button:has-text('Add')").click();
    await this.page.locator("input[placeholder='Job Title']").fill(title);
    await this.page.locator("textarea[placeholder='Type description here']").fill('Automation QA role');
    await this.page.locator("button:has-text('Save')").click();
    await this.page.waitForSelector("p:has-text('Successfully Saved')", { timeout: 40000 });
  }
}
