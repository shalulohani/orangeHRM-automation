import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  page: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.login('Admin', 'admin123');
    await use(page);
  },
});

export { expect };
