Feature: Order SafeBoda
    Scenario: Successfully matched with a driver
        Given I am on the Order a Safeboda page
        When I input my location and target destination
        Then I am matched with a driver

    Scenario: No drivers available
        Given I am on the Order a Safeboda page
        When I input my location and target destination
        Then I am notified that there are no divers available at the moment