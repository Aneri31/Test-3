// config.js
const { devices } = require('@playwright/test');

const config = {
  use: {
    headless: false, // Run tests in non-headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

module.exports = {
  baseURL: 'https://testautomationpractice.blogspot.com/',
  expectedURL: 'https://demo.opencart.com/',
  credentials: 
  {
    username: 'Aneri',
    password: 'Aneri@123'
  }
};

