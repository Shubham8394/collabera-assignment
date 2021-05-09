module.exports = {

    click: function (element) {
        try {
            $(element).click();
        } catch (e) {
            console.log(e);
            throw new Error('Element: ' + element + ' cannot be clicked');
        }
    },

    navigateToURL: function(url) {
        try {
            browser.url(url);
        } catch (e) {
            console.log(e);
            throw new Error('URL: ' + element + ' cannot be loaded');
        }
    },

    setText: function (element, value) {
        try {
            $(element).setValue(value);
        } catch (e) {
            console.log(e);
            throw new Error('Unable to enter text in Element: ' + element);
        }
    },

    getText: function (element) {
        try {
            return $(element).getText();
        } catch (e) {
            console.log(e);
            throw new Error('Unable to fetch text from Element: ' + element);
        }
    },

    waitForElementToBePresent: function (element) {
        browser.waitUntil(() => {
            return $(element).isDisplayed() === true
        }, 30000, "Element: " + element + " is not present");
    },

    waitForClickable: function (element) {
        $(element).waitForClickable({ timeout: 30000 });
    },

    selectByText: function (element, text) {
        try {
            $(element).selectByVisibleText(text);
        } catch (e) {
            throw new Error('Unable to select text: ' + text + ' from an element: ' + element);
        }
    },

    selectByValue: function (element, value) {
        try {
            $(element).selectByAttribute('value', value);
        } catch (e) {
            throw new Error('Unable to select value: ' + value + ' from an element: ' + element);
        }
    },

    getAttribute: function (element, attributeName) {
        try {
            return $(element).getAttribute(attributeName);
        } catch (e) {
            throw new Error('Unable to fetch attribute: ' + attributeName + ' value from an element: ' + element)
        }
    }
}
