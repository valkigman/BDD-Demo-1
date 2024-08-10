Feature: View recent activity
    Scenario: My recent activity is displayed
        Given I am on the Safeboda home page
        When I choose to view my recent activity
        Then The details of my last 8 trips are displayed

    Scenario: Nothing is shown
        Given I am on the Safeboda home page
        When I choose to view my recent activity
        Then A blank screen is shown