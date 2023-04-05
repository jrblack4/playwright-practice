import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: './reports' }],
    ['json', { outputFolder: './reports' }],
    ['list', { outputFolder: './reports' }],
    ['junit', { outputFolder: './reports' }],
  ],

  projects: [
    {
      name: 'defaults',
      testDir: 'tests',
      use: {
        ...devices['Desktop Chrome'],
        trace: 'on-first-retry',
      },
    },
    {
      name: 'ui-automation-playground',
      testDir: 'tests/ui-automation-playground',
      use: {
        ...devices['Desktop Chrome'],
        trace: 'on-first-retry',
      },
    },
    {
      name: 'api-automation-playground',
      testDir: 'tests/api-automation-playground',
      use: {
        ...devices['Desktop Chrome'],
        trace: 'on-first-retry',
      },
    },
  ],

  outputDir: 'reports/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
