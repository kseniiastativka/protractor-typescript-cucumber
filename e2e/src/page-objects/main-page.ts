import { $ } from 'protractor';

export class MainPage {
  public async clickCounterClickMeButton(): Promise<void> {
    await $('[data-locator=counter-click-me]').click();
  }

  public async clickCounterResetButton(): Promise<void> {
    await $('[data-locator=counter-reset]').click();
  }

  public async getCount(): Promise<number> {
    return parseInt(await $('[data-locator=counter-count]').getText(), 10);
  }

  public async getTitle(): Promise<string> {
    return $('[data-locator=title]').getText();
  }
}
