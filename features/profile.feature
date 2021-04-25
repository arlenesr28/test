@profile
Feature: Profile Book Store Application

Background:
    Given I am on the login page
    When I login with asalgado and Test123!
  
  Scenario: I search a Book 
    
    Then I search for <author>
    
    Examples:
      | author                 |publisher          |
      | Addy Osmani            |O'Reilly Media     |