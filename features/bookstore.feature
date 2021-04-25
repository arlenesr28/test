@bookstore
Feature: Book Store Application

Background:
    Given I am on the login page

  Scenario: I search a Book
    
    When I login with <username> and <password>
    When I scrolldown to BookStore and click
    Then I search for <publisher>
    
    Examples:
      | author                 |publisher          | username           | password          |
      | Addy Osmani            |O'Reilly Media     | asalgado           |Test123!           |