import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});
