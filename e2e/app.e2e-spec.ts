import { ConceptsPage } from './app.po';

describe('concepts App', () => {
  let page: ConceptsPage;

  beforeEach(() => {
    page = new ConceptsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
