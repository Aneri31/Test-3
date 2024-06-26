const { defineConfig } = require('@playwright/test');
const { baseURL } = require('./config/config.js');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL,
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
});
