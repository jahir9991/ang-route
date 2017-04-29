import { AngRoutePage } from './app.po';

describe('ang-route App', () => {
  let page: AngRoutePage;

  beforeEach(() => {
    page = new AngRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
