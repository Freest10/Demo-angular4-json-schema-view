import { Test5Page } from './app.po';

describe('test5 App', () => {
  let page: Test5Page;

  beforeEach(() => {
    page = new Test5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
