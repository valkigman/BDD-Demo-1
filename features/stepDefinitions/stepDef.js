const { Given, When, Then } = require('@cucumber/cucumber');

// Ordering a Safeboda
    Given('I am on the Order a Safeboda page', function() {
        console.log('Given I am on the Order a Safeboda page');
    });

    When('I input my location and target destination', function() {
        console.log('When I input my location and target destination');
    });

    Then('I am matched with a driver', function() {
        console.log('Then I am matched with a driver');
    });

    Then('I am notified that there are no divers available at the moment', function() {
        console.log('Then I am notified that there are no divers available at the moment');
    });

// Depositing money
Given('I am on the Deposit Money menu', function() {
    console.log('Given I am on the Deposit Money menu');
});

When('I input my financial details', function() {
    console.log('When I input my financial details');
});

Then('My SafeBoda account is credited with funds', function() {
    console.log('Then my SafeBoda account is credited with funds');
});

Then('A Transaction Failed message is displayed', function() {
    console.log('A Transaction Failed message is displayed');
});

// Buying Airtime
Given('I am on the Buy Airtime page', function() {
    console.log('I am on the Buy Airtime page');
});

When('I input the amount of airtime that I want to purchase', function() {
    console.log('When I input the amount of airtime that I want to purchase');
});

Then('My telephone line is credited with airtime', function() {
    console.log('Then my telephone line is credited with airtime');
});

Then('I get an Insufficient Balance notification', function() {
    console.log('Then I get an Insufficient Balance notification');
});

// Viewing Activity
Given('I am on the Safeboda home page', function() {
    console.log('Given I am on the Safeboda home page');
});

When('I choose to view my recent activity', function() {
    console.log('When I choose to view my recent activity');
});

Then('The details of my last 8 trips are displayed', function() {
    console.log('Then The details of my last 8 trips are displayed');
});

Then('A blank screen is shown', function() {
    console.log('Then A blank screen is shown');
});