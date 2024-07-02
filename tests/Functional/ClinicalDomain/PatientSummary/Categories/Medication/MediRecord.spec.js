import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cellma4testing.riomed.com/cellmaUser/login');
  await page.getByTestId('Username').click();
  await page.getByTestId('Username').fill('manoj.auto');
  await page.getByTestId('Password').click();
  await page.getByTestId('Password').fill('Manoj@2023');
  await page.getByTestId('Login').click();
  await page.getByTestId('Patients').click();
  await page.getByTestId('Family Name').click();
  await page.getByTestId('Family Name').fill('gaikwad');
  await page.getByTestId('Given Name').click();
  await page.getByTestId('Given Name').fill('raj');
  await page.getByTestId('Search').click();
  await page.getByRole('cell', { name: '-' }).nth(2).click();
  await page.getByTestId('Confirm Existing Details').click();
  await page.getByTestId('Add Contact').click();
  await page.getByLabel('Close Menu').click();
  await page.getByTestId('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsSAAALEgHS3X78AAADIElEQVRYhe2Zq47bQBSG/60KDIMD3LyAJdOihpcErFRYcxOvAkLTMgMrJgZlWVSaSmUlKajUljRRXiCyVONAs1RT/ZZmnRl7fIlXK+2Rokhje+bz8bnO3JzPZzw1efHkiJ+hB5SX11xqvDi4AKYARgC2Wehs+5j3Ko5I2BiA+N8AOBF+AsDLQmfTZf7eoQksNBpnobMsXZsBWAMIstBZt12jV2gJWAtlck+d9OaIpjBZ6OxoKvF4cfAeDVoFPJ/fufP5nRKqK3hnaB0wx7RC8BnBR4NB1wAHUbSqtFmGQPFrpO3W0BrgiSmwJDuGQmNplVxqnM6LolWnOFwnjaEJ/APA5zJwFK2OAI4Np5xQ28bSyDwkDYcAbtuGrNJ875k1+4cumcRHKWS1ShDSfB+y0Gn0dYwyos6GpfFNFjrGWm/7XCG1mq5yOsZaYZOuqca7AqMO2iQ1Z6FTVHC14H0AV0I3KWxMwPsChs6m21ZiTMdbhj2PL9MrsBJ6vDgUcbNV6SiBQyr8ewOGxjyWXKBVKJNMRfz/AvC9T2BoMuKMbVJrEeDjxSEA8BPAVxVwntgu15JlZ/lpbaJRmcc5C52bLtBVTpcn9pQtF6T+EWx+i5cIquB778ZrgD02vEvLT2PF4wHvuc8T+5vlp7eqNVQ2vWcDei3gqQa4EKHhvwDe5okdmELHbbqJGuAR551Zfqqt6HifmOM3gNcAVnliX9TaF9CMGv87ClNwg8Th0cm0LZgELO7z+HL3wmRqoQnuMVbXghtmuhk1bQQsXYoVEUafxk3AG6TmN7pGtwIY1PYrY2gF+LQEPG2S6Sw/PZXHqoCrxLSeXtK2joyrhXMEJvtyeWKLZ1zLT4/SmBFwnthny08f5A2jOM09uaWk7RNraVPZMrWvGwILe96Xxxsllw5btRtGkHVDkwhU/eNgZy55YgvT+ATgnQkwtSy+zKTsD1fdVC+JgPgjth8MgAtT8lQOPOjplqS9DeuPY+n6iCYRsGhSlseDH8kxLS+537GX4rfLeP6FwNpthUc7R6RWizMZSM55YQ5leT78HEqeoQcRAP8AabwGHDlic28AAAAASUVORK5CYII=').click();
  await page.getByLabel('Any Search, Item, Code,').click();
  await page.getByLabel('Any Search, Item, Code,').fill('asp');
  await page.getByRole('option', { name: 'Aspirin 25mg capsules' }).click();
  await page.getByTestId('Add').click();
  await page.getByTestId('dataID').getByLabel('cellmaAccordionIcon').click();
  await page.getByTestId('subCategory').getByLabel('Sub Category').click();
  await page.getByRole('option', { name: 'Antibacterial' }).click();
  await page.getByTestId('Dose').click();
  await page.getByTestId('Dose').fill('5');
  await page.getByLabel('Frequency *').click();
  await page.getByRole('option', { name: '24 Hours' }).click();
  await page.getByLabel('Route *').click();
  await page.getByRole('option', { name: 'Oral' }).click();
  await page.getByTestId('Days').click();
  await page.getByTestId('Days').fill('5');
  await page.getByTestId('site').getByLabel('Site').click();
  await page.getByRole('option', { name: 'Left' }).click();
  await page.getByTestId('prescribedBy').getByLabel('Prescribed By').click();
  await page.getByRole('option', { name: 'GP' }).click();
  await page.getByTestId('Start Date').getByLabel('Choose date').click();
  await page.getByLabel('Jun 11,').click();
  await page.getByTestId('Stop Date').getByLabel('Choose date').click();
  await page.getByLabel('Jun 15,').click();
  await page.getByTestId('sideEffect').locator('div').filter({ hasText: 'Side Effect' }).click();
  await page.getByRole('option', { name: 'Giddiness' }).click();
  await page.getByTestId('status').getByLabel('Status').click();
  await page.getByRole('option', { name: 'Current' }).click();
  await page.getByTestId('indication').getByLabel('Indication').click();
  await page.getByRole('option', { name: 'Right' }).click();
  await page.getByTestId('stoppedReason').getByLabel('Stopped Reason').click();
  await page.getByRole('option', { name: 'Side Effect' }).click();
  await page.getByTestId('pGDPSD').getByLabel('PGD/PSD').click();
  await page.getByRole('option', { name: 'PSD' }).click();
  await page.getByTestId('maxReffills').getByLabel('Max Reffills').click();
  await page.getByRole('option', { name: '3', exact: true }).click();
  await page.getByTestId('Unit').click();
  await page.getByTestId('Unit').fill('Tab');
  await page.getByLabel('Current Location *').click();
  await page.getByRole('option', { name: 'Cardio Location' }).click();
  await page.getByLabel('Link to Diagnosis *').click();
  await page.getByLabel('Link to Diagnosis *').fill('asth');
  await page.getByRole('option', { name: 'Asthma' }).click();
  await page.getByTestId('adherent').getByLabel('Adherent').click();
  await page.getByRole('option', { name: 'Adherent', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Prescription and supply' }).check();
  await page.getByRole('checkbox', { name: 'Add to Prescription' }).check();
  await page.getByRole('checkbox', { name: 'Supply', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Set as Default' }).check();
  await page.getByRole('checkbox', { name: 'Repeatable' }).check();
  await page.getByRole('checkbox', { name: 'Private Record' }).check();
  await page.getByTestId('endoserment').getByLabel('Endoserment').click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByTestId('forCondition').getByLabel('For Condition').click();
  await page.getByRole('option', { name: 'Dirty living conditions' }).click();
  await page.getByTestId('Notes').click();
  await page.getByTestId('Notes').fill('added for testing');
  await page.getByTestId('Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Medication added successfully').click();
  await page.getByRole('row', { name: 'expandRowIconundefined Aspirin 25mg capsules current patientHistoryIconButton' }).getByLabel('expandRowIconundefined').click();
  await page.getByRole('row', { name: 'expandRowIconundefined Aspirin 25mg capsules current patientHistoryIconButton' }).getByLabel('editIconButton').click();
  await page.getByTestId('dataID').getByLabel('cellmaAccordionIcon').click();
  await page.getByTestId('Notes').click();
  await page.getByTestId('Notes').click();
  await page.getByTestId('Notes').press('Shift+Home');
  await page.getByTestId('Notes').fill('Updated for testing');
  await page.getByTestId('Save').click();
  await page.getByLabel('Current Location *').click();
  await page.getByRole('option', { name: 'Cardio Location' }).click();
  await page.getByTestId('Save').click();
  await page.getByRole('button', { name: 'Save' }).click();
});