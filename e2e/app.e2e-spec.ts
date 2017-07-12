import { AuctionUiPage } from './app.po';

describe('auction-ui App', () => {
  let page: AuctionUiPage;

  beforeEach(() => {
    page = new AuctionUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
