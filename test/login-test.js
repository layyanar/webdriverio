const { assert } = require("chai");
const loginPage = require("../page/login-page");
const configData = require("../config");
const constants = require("../constants");

describe("login page feature test", function () {
  it("verify login page title", function () {
    browser.url("/");
    browser.maximizeWindow();
    const title = loginPage.getPageTitle();
    console.log("login page title is: ", title);
    assert.equal(constants.LOGIN_PAGE_TITLE, title, "title is not found");
  });

  it("verify sign up link", function () {
    assert.equal(
      true,
      loginPage.isSignupLinkExist(),
      "signup link is not present"
    );
  });

  it("verify login", function () {
    // loginPage.doLogin("lraja.eng@gmail.com", "test@123")
    loginPage.doLogin(configData.username, configData.password);
  });
});
