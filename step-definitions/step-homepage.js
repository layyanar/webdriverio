const { Given, When, Then } = require("cucumber");

const homePage = require("../page/home-page");

Given("User is on freshworks page", () => {
  homePage.navigateToHomePage();
});

When("User prints the page header name", () => {
  homePage.getPageHeader();
});

When("User prints the subheading name", () => {
  homePage.getPageSubHeader();
});

Then("User clicks on the customer link", () => {
  homePage.clickCustomerLink();
});
