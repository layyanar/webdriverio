const elementUtil = require("../util/elementUtil");
const constants = require("../constants");

class LoginPage {
  //page locators
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginBtn() {
    return $("#loginBtn");
  }
  get signupLink() {
    return $("= Sign up");
  }

  //page actions
  getPageTitle() {
    return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE);
  }

  isSignupLinkExist() {
    return elementUtil.doIsDisplayed(this.signupLink);
  }

  doLogin(emailID, pw) {
    elementUtil.doSetValue(this.username, emailID);
    elementUtil.doSetValue(this.pw, this.password);
    elementUtil.doClick(this.loginBtn);
  }
}

module.exports = new LoginPage();
