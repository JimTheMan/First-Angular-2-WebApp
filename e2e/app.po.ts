export class Ng2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-2-app h1')).getText();
  }
}
