import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cellma4testing.riomed.com/cellmaUser/login');
  await page.getByTestId('Username').click();
  await page.getByTestId('Username').fill('manoj.auto');
  await page.getByTestId('Password').click();
  await page.getByTestId('Password').fill('Manoj@2023');
  await page.getByTestId('Login').click();
  await page.getByTestId('Patients').click();
  await page.getByTestId('Given Name').click();
  await page.getByTestId('Given Name').fill('raj');
  await page.getByTestId('Family Name').click();
  await page.getByTestId('Family Name').fill('gaikwad');
  await page.getByTestId('Search').click();
  await page.getByTestId('Menu').click();
  await page.getByTestId('menuDropDownLogout').click();
});