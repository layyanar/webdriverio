Feature: Freshwork portal

  @freshwork
  Scenario: Homepage validation
    Given User is on freshworks page
    When User prints the page header name
    When User prints the subheading name
    Then User clicks on the customer link