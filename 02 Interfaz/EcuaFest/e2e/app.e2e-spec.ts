import { EcuaFestPage } from './app.po';

describe('ecua-fest App', () => {
  let page: EcuaFestPage;

  beforeEach(() => {
    page = new EcuaFestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
