import { BlogappPage } from './app.po';

describe('blogapp App', () => {
  let page: BlogappPage;

  beforeEach(() => {
    page = new BlogappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
