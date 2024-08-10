Feature: Deposit Money
    Scenario: Transaction is successful
        Given I am on the Deposit Money menu
        When I input my financial details
        Then My SafeBoda account is credited with funds

    Scenario: Transaction fails
        Given I am on the Deposit Money menu
        When I input my financial details
        Then A Transaction Failed message is displayed