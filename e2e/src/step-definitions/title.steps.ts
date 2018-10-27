import { Then } from 'cucumber';
import { expect } from 'chai';
import { MainPage } from '../page-objects/main-page';

const mainPage = new MainPage();

Then('the User sees the title {string}', async (expectedTitleText: string) => {
  const titleText =  await mainPage.getTitle();
  expect(titleText).to.equal(expectedTitleText);
});
