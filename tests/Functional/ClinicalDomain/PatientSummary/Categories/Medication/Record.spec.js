import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.0.0.49:8080/cellmaWEB/index.do');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('m.g');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByRole('button', { name: 'Set' }).click();
  await page.locator('#homePageIconContainer > .homePageIcon').first().click();
  await page.getByLabel('Barcode:').fill('7063');
  await page.getByRole('row', { name: 'Barcode: Card: Search' }).locator('a').click();
  await page.getByText('Select', { exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Existing Details' }).click();
 // await page.goto('http://10.0.0.49:8080/cellmaWEB/SaveContactType.do');
  await page.getByRole('cell', { name: 'X Index You are logged in as' }).locator('#closebtn').click();
  await page.locator('#assessment').click();
  await page.locator('#claId').selectOption('425');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByText('Audiology review & tuning 1').click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test1');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test1');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
  await page.getByText('Audiology review & tuning 2').click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test2');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test2');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
//   await page.getByRole('img', { name: 'Stored Extra Details' }).click();
   await page.getByText('Audiology Review 1 week').click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test3');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test3');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
  //await page.getByRole('img', { name: 'Stored Extra Details' }).click();
  await page.getByText('Audiology review Adhoc').click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test4');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test4');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
await page.locator("xpath=//button[@id='btnNextMandatoryCheck']").click()
await page.waitForTimeout(2000)
 // await page.goto('http://10.0.0.49:8080/cellmaWEB/SaveQuestionsResult.do');
  await page.locator('#table43257').getByRole('cell', { name: 'Left' }).click();
  await page.getByText('Abnormal').click();
  await page.locator('#cesdate_5').click();
  await page.locator('#cesdate_5').fill('test');
  await page.locator('#cestextarea_7').click();
  await page.locator('#cestextarea_7').fill('test');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
  await page.getByRole('img', { name: 'Stored Extra Details' }).click();
  await page.locator('#table44032').getByRole('cell', { name: 'Right' }).click();
  await page.locator('#tableces_2').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#tableces_14').getByRole('cell', { name: 'NP' }).click();
  await page.locator('#tableces_6').getByRole('cell', { name: 'Rounded' }).click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
  await page.locator('#table44034').getByRole('cell', { name: 'Yes' }).click();
  await page.locator('#cestextarea_1').click();
  await page.locator('#cestextarea_1').fill('test');
  await page.getByRole('cell', { name: 'Comments Notes Save', exact: true }).locator('#edNotes').fill('tested');
  await page.getByRole('cell', { name: 'Comments Notes Save', exact: true }).locator('#edSave').click();
  await page.getByRole('img', { name: 'Stored Extra Details' }).click();
  //await page.goto('http://10.0.0.49:8080/cellmaWEB/SaveQuestionsResult.do');
  await page.locator('#table44088').getByRole('cell', { name: 'Data logs left' }).click();
  await page.getByText('One', { exact: true }).click();
  await page.locator('#cestextarea_9').click();
  await page.locator('#cestextarea_9').fill('test');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('test1');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
  await page.getByRole('img', { name: 'Stored Extra Details' }).click();
  await page.locator('#table44183').getByRole('cell', { name: 'Right' }).click();
  await page.getByText('Yes').click();
  await page.getByText('Yes').click();
  await page.locator('#cestextarea_7').click();
  await page.locator('#cestextarea_7').fill('test');
  await page.locator('#edNotes').click();
  await page.locator('#edNotes').fill('ester4');
  await page.locator('#edSave').click();
  await page.waitForTimeout(1000)
//   await page.goto('http://10.0.0.49:8080/cellmaWEB/SaveQuestionsResult.do');
//   await page.goto('http://10.0.0.49:8080/cellmaWEB/MarkAssessmentAsComplete.do');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('MENU').click();
  await page.getByText('Log off').click();
  await page.getByRole('button', { name: 'Yes' }).click();
});