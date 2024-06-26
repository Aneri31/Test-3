const { test, expect } = require('@playwright/test');

test.describe('Name Field Tests', () => {
  test('Check if Name Field is Visible', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameField = await page.locator('#name');
    await expect(nameField).toBeVisible();
  });

  test('Check if Name Field is Editable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameField = await page.locator('#name');
    await expect(nameField).toBeEditable();
  });

  test('Check Empty Input', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameField = await page.locator('#name');
    await nameField.fill('');
    await expect(nameField).toHaveValue('');
  });

  test('Check Special Characters', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameField = await page.locator('#name');
    const special = 'hcghjghj9';
    await nameField.fill(special);
    await expect(nameField).toHaveValue(special);
  });

  test('Check Error Message for Invalid Input', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const nameField = await page.locator('#name');
    await nameField.fill('Ijj[;;jl');
    const errorMessage = await page.locator('.error-message'); 
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid name'); // Adjust the expected error message
  });
});

test('Check radio button is able to click or not', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const male = await page.locator('#male');
  await male.check()
  const result = await expect(male).toBeChecked();
 //console.log(result)
});


test('Check if Only One Radio Button is Selectable at a Time', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const maleRadioButton = await page.locator('#male');
  const femaleRadioButton = await page.locator('#female');
  
  await maleRadioButton.check();
  await expect(maleRadioButton).toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();
  
  await femaleRadioButton.check();
  await expect(femaleRadioButton).toBeChecked();
  await expect(maleRadioButton).not.toBeChecked();
});

test('Check Correct Value for Female Radio Button', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  const femaleRadioButton = await page.locator('#female')
  await femaleRadioButton.check()
  const selectedValue = await femaleRadioButton.getAttribute('value')
  await expect(selectedValue).toBe('female')
})

test.describe('Weekday Checkbox Tests', () => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  
  test('Check if All Weekday Checkboxes are Visible', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    for (const day of days) {
      const checkbox = await page.locator(`#${day}`)
      await expect(checkbox).toBeVisible()
    }
  })
})

test('Check if Each Checkbox is Selectable and Deselectable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  for (const day of days) {
    const checkbox = await page.locator(`#${day}`);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
});

test('Check if Each Checkbox is Select multiple or not', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  for (const day of days) {
    const checkbox = await page.locator(`#${day}`);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    
  }
});

test('Check Correct Value for Each Checkbox', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  for (const day of days) {
    const checkbox = await page.locator(`#${day}`);
    await checkbox.check();
    const selectedValue = await checkbox.getAttribute('value');
    await expect(selectedValue).toBe(day); 
  }
})

test('Button Click Opens New Tab', async ({ browser, page, context }) => {
  await page.goto('https://testautomationpractice.blogspot.com/'); 
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    page.locator('//button[@onclick="myFunction()"]').click() 
  ]);

  await newPage.waitForLoadState('load'); 
  await expect(newPage).toHaveURL('https://demo.opencart.com/'); 
});

