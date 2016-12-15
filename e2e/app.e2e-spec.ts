import { QppDesignExercisePage } from './app.po';

describe('qpp-design-exercise App', function() {
  let page: QppDesignExercisePage;

  beforeEach(() => {
    page = new QppDesignExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
