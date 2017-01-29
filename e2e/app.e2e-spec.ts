import { StarWarsViewerPage } from './app.po';

describe('star-wars-viewer App', function() {
  let page: StarWarsViewerPage;

  beforeEach(() => {
    page = new StarWarsViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
