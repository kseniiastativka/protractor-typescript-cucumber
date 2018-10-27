import { When, Then } from 'cucumber';
import { expect } from 'chai';
import { MainPage } from '../page-objects/main-page';

const mainPage = new MainPage();

When('the User clicks on the counter {string} button', async (buttonName: string) => {
  switch (buttonName) {
    case 'Click me!':
      await mainPage.clickCounterClickMeButton();
      break;
    case 'Reset':
      await mainPage.clickCounterResetButton();
      break;
    default:
      throw new Error('Unknown button name ' + buttonName);
  }
});

Then('the count is {int}', async (expectedCount: number) => {
  const afterClickCount =  await mainPage.getCount();
  expect(afterClickCount).to.equal(expectedCount);
});
