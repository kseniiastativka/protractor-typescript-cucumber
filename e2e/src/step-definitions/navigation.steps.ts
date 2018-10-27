import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('the User is on the main page', async () => {
  await browser.get('/');
});
