@login
Feature: Login for Book Store Application

Background:
    Given I am on the login page

  Scenario: I can login into the Book Application successfully
    
    When I login with <username> and <password>
    Then I should be able to login successfully with <username>
    Then I should logged out
    
    Examples:
      |username |password|message|
      |asalgado |Test123!|       |

  Scenario: I Log in with Invalid credentials
    
    When I login with <username> and <password>
    Then I should see an error like this <message>
    
    Examples:
      | username  | password      | message                       |
      | asalgado2 | Test123       | Invalid username or password! |
  
  Scenario: I can create a new user 

    When I click on the New User button
    Then I enter <FirstName> and <LastName> and <username> and <password>

    Examples:
      | FirstName             | LastName         | username           | password  |
      | Michael               | Scott            | mscott             | Test123!  |