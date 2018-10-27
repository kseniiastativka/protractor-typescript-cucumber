import { Given, Then } from 'cucumber';
import { browser, $ } from 'protractor';
import { expect } from 'chai';

Given('the User is on the main page', async () => {
  await browser.get('/');
});

Then('the User sees the title {string}', async (expextedTitleText: string) => {
  const titleText =  await $('h1').getText();
  expect(titleText).to.equal(expextedTitleText);
});
