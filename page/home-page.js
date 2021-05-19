const { default: pause } = require("webdriverio/build/commands/browser/pause");

class HomePage {
  //Cucumber
  navigateToHomePage() {
    browser.url("https://freshworks.com");
  }

  getPageHeader() {
    let text = $("h1").getText();
    console.log("PageHeader Name is: " + text);
  }

  getPageSubHeader() {
    let text = $("div.banner-text-content > p").getText();
    console.log("SubHeader Name is: " + text);
  }

  clickSupportLink() {
    let navIcon = $("//li//span[text()='Support']");
    navIcon.waitForClickable();
    navIcon.click();
    // let supLink = $(
    //   "//li//a//span[contains(@href, 'https://www.freshworks.com/support/')]"
    // );
    // console.log("SupportLink is: " + supLink.getText);
    // supLink.waitForClickable();
    // supLink.click();

    browser.pause(5000);
  }

  clickCustomerLink() {
    let customerLink = $("//div//li//a[contains(@class, 'nav-label')]");
    customerLink.click();
  }

  //Mocha Test
  get pageHeader() {
    return $("h1");
  }

  get subHeading() {
    return $("div.banner-text-context > p");
  }

  get supportLink() {
    return $("//span[contains(@class, 'nav-burger-icon')]");
  }
}
module.exports = new HomePage();
