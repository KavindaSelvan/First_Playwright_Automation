
// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000, //3rd method
  },

  reporter: 'html',

  use: {
    headless: false,
    browserName: 'chromium',
  },
});
