// tests/login.test.js

const { test, expect } = require('@playwright/test');

test.describe('Facebook Login Tests', () => {
  test('Login Test Example', async ({ page }) => {
    // Navigate to Facebook login page
    await page.goto('https://www.facebook.com/');

    // Fill in email/phone number
    await page.fill('input[name="email"]', 'your-email@example.com');

    // Fill in password
    await page.fill('input[name="pass"]', 'your-password');

    // Click login button
    await page.click('button[name="login"]');
  });
});
