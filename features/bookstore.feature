@bookstore
Feature: Book Store Application

Background:
    Given I am on the login page
    When I login with asalgado and Test123!
    Then I should be logged in
    When I scrolldown to BookStore and click

  Scenario Outline: I search a Book
    
    Then I search for <publisher>
    
    Examples:
      | author                 |publisher          | username           | password          |
      | Addy Osmani            |O'Reilly Media     | asalgado           | Test123!          |

  Scenario Outline: I click a Book to see all the information
    
    When I am on the Book Store Page and click on a book
    Then I see all the Information and Add the book to my collection
    Then I click back to the Book Store
    
    Examples:
      | author                 |publisher          | username           | password          |
      | Addy Osmani            |O'Reilly Media     | asalgado           | Test123!          |