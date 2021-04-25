@profile
Feature: Profile Book Store Application


    
  
  Scenario: I search a Book 
    Given I am on the login page
    When I login with asalgado and Test123!
    Then I search for <publisher>
    
    Examples:
      | author                 |publisher          |
      | Addy Osmani            |O'Reilly Media     |

  Scenario: I delete a Book 
    
    Then I delete the first book
    
    Examples:
      | author                 |publisher          |
      | Addy Osmani            |O'Reilly Media     |