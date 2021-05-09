import { When, Then, Given } from "cucumber";
import { expect } from "chai";
var helpers = require('../lib/helpers');
var object = require('../locators/objectRepository').MyStoreObjects;
var data = require('../data/data.json');

var emailID, productName, productReference, productPrice, quantity, size, color, shippingPrice;

Given(/^I navigate to '(.*?)'$/, (url) => {
    helpers.navigateToURL(url);
});

When(/^I navigate to Create Account Page$/, () => {
    helpers.click(object.signInLink);
    helpers.waitForElementToBePresent(object.createAccountButton);

    // Generating a Random Email ID
    emailID = (Math.floor((Math.random() * 10000) + 100)).toString()+'@gmail.com';
    helpers.setText(object.emailIDTextBox, emailID);
    helpers.click(object.createAccountButton);
});

Then(/^I enter my Registration Details$/, () => {
    // Personal Information
    if(data.personalInfo.title === 'Mr.')
        helpers.click(object.maleRadioBtn);
    else if(data.personalInfo.title === 'Mrs.')
        helpers.click(object.femaleRadioBtn);

    helpers.setText(object.customerFirstName, data.personalInfo.customerFirstName);
    helpers.setText(object.customerLastName, data.personalInfo.customerLastName);
    helpers.setText(object.passwordTextBox, data.personalInfo.password);

    helpers.selectByValue(object.daysDropdown, data.personalInfo.day);
    helpers.selectByValue(object.monthsDropdown, data.personalInfo.month);
    helpers.selectByValue(object.yearsDropdown, data.personalInfo.year);

    // Address Details
    helpers.setText(object.firstName, data.personalInfo.customerFirstName);
    helpers.setText(object.lastName, data.personalInfo.customerLastName);
    helpers.setText(object.address1, data.personalInfo.address1);
    helpers.setText(object.city, data.personalInfo.city);
    helpers.selectByText(object.state, data.personalInfo.state);
    helpers.setText(object.postalCode, data.personalInfo.postalCode);
    helpers.setText(object.mobileNumber, data.personalInfo.mobilePhone);
});

Then(/^I click on Register Button and Validate the Customer Name$/, () => {
    helpers.click(object.registerButton);
    let customerName = data.personalInfo.customerFirstName + ' ' + data.personalInfo.customerLastName;
    helpers.waitForElementToBePresent(object.customerName.replace('<param>', customerName));
});

Then(/^I logout and login with the user credentials$/, () => {
    helpers.click(object.signOutLink);
    helpers.click(object.signInLink);
    helpers.setText(object.emailAddress, emailID);
    helpers.setText(object.passwordTextBox, data.personalInfo.password);
    helpers.click(object.signInButton);

    let customerName = data.personalInfo.customerFirstName + ' ' + data.personalInfo.customerLastName;
    helpers.waitForElementToBePresent(object.customerName.replace('<param>', customerName));
});

Then(/^I add a product to the cart$/, () => {
    // Search the Product
    helpers.setText(object.searchBox, 'Dresses');
    helpers.click(object.searchButton);
    helpers.click(object.product);

    // Fetching Product Details
    productName = helpers.getText(object.nameOfProduct);
    productReference = helpers.getText(object.productReference);
    size = helpers.getText(object.sizeOfDress);
    quantity = helpers.getAttribute(object.quantityOfProduct, 'value');
    color = helpers.getAttribute(object.colorOfDress, 'title');
    productPrice = helpers.getText(object.priceOfProduct);

    // Adding to Cart
    helpers.click(object.addToCartButton);
});

Then(/^I proceed to checkout and navigate to Payments Page$/, () => {
    // Proceed to Summary Step
    helpers.waitForClickable(object.proceedToCheckoutButton);
    helpers.click(object.proceedToCheckoutButton);
    helpers.waitForElementToBePresent(object.summaryStep);
    
    // Proceed to Address Step
    helpers.click(object.checkoutButtonOnSummaryStep);
    helpers.waitForElementToBePresent(object.addressStep);

    // Proceed to Shipping Step
    helpers.click(object.checkoutButtonOnAddressStep);
    helpers.waitForElementToBePresent(object.shippingStep);
    shippingPrice = helpers.getText(object.shippingPrice);
    helpers.click(object.termsOfServiceCheckbox);

    // Proceed to Payment Steps
    helpers.click(object.checkoutButtonOnShippingStep);
});

Then(/^I validate Product Details on Payments Page$/, () => {
    helpers.waitForElementToBePresent(object.paymentStep);

    // Validating the Product Name
    expect(productName).to.equal(helpers.getText(object.productNameInCart));

    // Validating the Product Reference
    helpers.waitForElementToBePresent(object.cartReference.replace('<param>', productReference));

    // Validating the Product Color and Size
    helpers.waitForElementToBePresent(object.colorSizeOfProductInCart.replace('<color>', color).replace('<size>', size));

    // Validating the Price of Product
    expect(productPrice).to.equal(helpers.getText(object.unitPriceOfProduct));

    // Validating the Quantity of Product
    expect(quantity).to.equal(helpers.getText(object.quantityOfProductInCart));

    // Validating the Shipping Price
    expect(shippingPrice).to.equal(helpers.getText(object.shippingPriceInCart));

    // Validating the Total Amount
    let total = '$' + (parseFloat(productPrice.replace('$', '')) * parseInt(quantity)).toFixed(2);
    expect(total).to.equal(helpers.getText(object.totalPriceOfProduct));
});