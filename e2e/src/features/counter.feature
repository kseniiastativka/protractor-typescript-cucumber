Feature: Counter

  # Repeated Given steps can be moved to background section
  Background: 
    Given the User is on the main page

  @fast
  Scenario: Counter increase
    When the User clicks on the counter "Click me!" button
    Then the count is 1

  Scenario: Counter reset
    When the User clicks on the counter "Click me!" button
    And the User clicks on the counter "Reset" button
    Then the count is 0