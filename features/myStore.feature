Feature: My Store

    Background: Navigate to My Store
        Given I navigate to 'http://automationpractice.com/index.php'

    @myStore
    Scenario: To Register and add a Product to the cart
        When I navigate to Create Account Page
        Then I enter my Registration Details
        And I click on Register Button and Validate the Customer Name
        Then I logout and login with the user credentials
        And I add a product to the cart
        Then I proceed to checkout and navigate to Payments Page
        And I validate Product Details on Payments Page