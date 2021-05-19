class ElementUtil {
  doClick(element) {
    element.waitForDisplayed();
    element.click();
  }

  doSetValue(element) {
    element.waitForDisplayed();
    element.setValue();
  }

  doGetText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  doIsDisplayed(element) {
    element.waitForDisplayed();
    element.isDisplayed();
  }

  doGetPageTitle(pageTitle) {
    browser.waitUntil(
      function () {
        return browser.getTitle() == pageTitle;
      },
      15000,
      "Title is not displayed after the given wait time"
    );
    return BhxBrowser.getTitle();
  }
}

module.exports = new ElementUtil();
