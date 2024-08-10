Feature: Buy Airtime
    Scenario: Purchase is executed
        Given I am on the Buy Airtime page
        When I input the amount of airtime that I want to purchase
        Then My telephone line is credited with airtime

    Scenario: Transaction fails due to insufficient funds
        Given I am on the Buy Airtime page
        When I input the amount of airtime that I want to purchase
        Then I get an Insufficient Balance notification