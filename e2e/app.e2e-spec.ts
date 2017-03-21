import { SpeedyGiftPrototypePage } from './app.po';

describe('speedy-gift-prototype App', () => {
  let page: SpeedyGiftPrototypePage;

  beforeEach(() => {
    page = new SpeedyGiftPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
