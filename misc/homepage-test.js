const homePage = require("../page/home-page");

describe("homepage elements handle", function () {
  it("verify homepage elements", function () {
    browser.url("https://www.freshworks.com");
    let text = homePage.pageHeader.getText();
    console.log(text);
  });
});
