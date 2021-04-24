Feature: Login for Book Store Application

Background:
    Given I am on the login page

  Scenario: I can login into the Book Application successfully
    
    When I login with <username> and <password>
    Then I should be able to login successfully with <username>
    
    Examples:
      |username |password|message|
      |asalgado |Test123!|       |

  Scenario Outline: I Log in with Invalid credentials
    
    When I login with <username> and <password>
    Then I should see an error like this <message>
    
    Examples:
      | username  | password      | message                       |
      | asalgado2 | Test123       | Invalid username or password! |