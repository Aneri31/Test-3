const { test, expect } = require('@playwright/test');
const { baseURL, expectedURL, credentials } = require('../config/config');

test('Button Click Opens New Tab', async ({ context, page }) => {
  await page.goto(baseURL);

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new page event using context
    page.locator('//button[@onclick="myFunction()"]').click() // Click the button that opens the new tab
  ]);

  await newPage.waitForLoadState('load'); // Wait for the new tab to load completely

  await expect(newPage).toHaveURL(expectedURL); // Check the URL of the new tab
});

