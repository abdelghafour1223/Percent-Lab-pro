import { test, expect } from '@playwright/test';

test.describe('Percentage Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the homepage with calculator', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Free Percentage Calculator');
    await expect(page.getByRole('button', { name: 'Calculate & Explain' })).toBeVisible();
  });

  test('should calculate 20% of 200', async ({ page }) => {
    // Fill in the Percent Of calculator
    await page.getByLabel('Percentage (%)').fill('20');
    await page.getByLabel('Of Number').fill('200');
    await page.getByRole('button', { name: 'Calculate & Explain' }).click();

    // Wait for result
    await page.waitForSelector('text=Result');

    // Check if result is displayed (20% of 200 = 40)
    await expect(page.locator('text=40')).toBeVisible();
    await expect(page.locator('text=Step-by-Step Solution')).toBeVisible();
  });

  test('should calculate what percent 50 is of 200', async ({ page }) => {
    // Switch to "What Percent" tab
    await page.getByRole('tab', { name: 'What Percent' }).click();

    // Fill in the calculator
    await page.getByLabel('Part/Value').fill('50');
    await page.getByLabel('Total/Whole').fill('200');
    await page.getByRole('button', { name: 'Calculate & Explain' }).click();

    // Wait for result
    await page.waitForSelector('text=Result');

    // Check if result is displayed (50 is 25% of 200)
    await expect(page.locator('text=25')).toBeVisible();
  });

  test('should calculate percentage increase', async ({ page }) => {
    // Switch to "Increase/Decrease" tab
    await page.getByRole('tab', { name: 'Increase/Decrease' }).click();

    // Fill in the calculator
    await page.getByLabel('Original Value').fill('100');
    await page.getByLabel('New Value').fill('120');
    await page.getByRole('button', { name: 'Calculate & Explain' }).click();

    // Wait for result
    await page.waitForSelector('text=Result');

    // Check if result is displayed (increase from 100 to 120 is 20%)
    await expect(page.locator('text=20')).toBeVisible();
  });

  test('should show formula and steps', async ({ page }) => {
    // Fill in a calculation
    await page.getByLabel('Percentage (%)').fill('10');
    await page.getByLabel('Of Number').fill('100');
    await page.getByRole('button', { name: 'Calculate & Explain' }).click();

    // Wait for result
    await page.waitForSelector('text=Result');

    // Check for formula and steps
    await expect(page.locator('text=Formula')).toBeVisible();
    await expect(page.locator('text=Step-by-Step Solution')).toBeVisible();
    await expect(page.locator('text=Real-Life Examples')).toBeVisible();
  });

  test('should handle errors gracefully', async ({ page }) => {
    // Try to calculate without filling in values
    await page.getByRole('button', { name: 'Calculate & Explain' }).click();

    // Should show an error
    await expect(page.locator('text=Please enter valid numbers')).toBeVisible();
  });

  test('should switch between tabs correctly', async ({ page }) => {
    // Check default tab
    await expect(page.getByLabel('Percentage (%)')).toBeVisible();

    // Switch to What Percent tab
    await page.getByRole('tab', { name: 'What Percent' }).click();
    await expect(page.getByLabel('Part/Value')).toBeVisible();

    // Switch to Increase/Decrease tab
    await page.getByRole('tab', { name: 'Increase/Decrease' }).click();
    await expect(page.getByLabel('Original Value')).toBeVisible();

    // Switch back to Percent Of
    await page.getByRole('tab', { name: 'Percent Of' }).click();
    await expect(page.getByLabel('Percentage (%)')).toBeVisible();
  });

  test('should navigate to FAQ page', async ({ page }) => {
    await page.getByRole('link', { name: 'FAQ' }).click();
    await expect(page).toHaveURL('/faq');
    await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About PercentLab');
  });

  test('should toggle dark mode', async ({ page }) => {
    // Find and click the theme toggle button
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();

    // Get initial class
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');

    // Toggle theme
    await themeToggle.click();

    // Wait a bit for the transition
    await page.waitForTimeout(100);

    // Check that the class changed
    const newClass = await html.getAttribute('class');
    expect(initialClass).not.toBe(newClass);
  });
});

test.describe('Programmatic SEO Pages', () => {
  test('should load programmatic page', async ({ page }) => {
    await page.goto('/what-is-20-percent-of-200');
    await expect(page.locator('h1')).toContainText('What is 20% of 200?');
    await expect(page.locator('text=40')).toBeVisible();
  });

  test('should show related calculations', async ({ page }) => {
    await page.goto('/what-is-20-percent-of-200');
    await expect(page.locator('text=Related Calculations')).toBeVisible();
  });

  test('should have structured data', async ({ page }) => {
    await page.goto('/what-is-20-percent-of-200');
    const structuredData = await page.locator('script[type="application/ld+json"]').textContent();
    expect(structuredData).toBeTruthy();
    expect(structuredData).toContain('HowTo');
  });
});
