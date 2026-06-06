import { Page } from '@playwright/test';

export class AdminPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addJobTitle(title: string) {

    // Click Admin menu
    await this.page.locator("a[href*='admin']").first().click();

    // Click Job tab in top bar
    await this.page.locator(".oxd-topbar-body-nav-tab:has-text('Job')").click();

    // Click Job Titles from left-side menu
    await this.page.locator("a:has-text('Job Titles')").click();

    // Wait for Add Job Title form
    await this.page.waitForSelector("h6:has-text('Add Job Title')", { timeout: 40000 });

    // Fill Job Title
    await this.page.locator("input[placeholder='Job Title']").fill(title);

    // Fill Description
    await this.page.locator("textarea[placeholder='Type description here']").fill('Automation QA role');

    // Save
    await this.page.locator("button:has-text('Save')").click();

    // Verify success toast
    await this.page.waitForSelector("p:has-text('Successfully Saved')", { timeout: 40000 });
  }
}
