export var MyStoreObjects = {
    signInLink: ".login",
    createAccountButton: "#SubmitCreate",
    emailIDTextBox: "#email_create",
    maleRadioBtn: "#uniform-id_gender1",
    femaleRadioBtn: "#uniform-id_gender2",
    customerFirstName: "#customer_firstname",
    customerLastName: "#customer_lastname",
    passwordTextBox: "#passwd",
    daysDropdown: "#days",
    monthsDropdown: "#months",
    yearsDropdown: "#years",
    firstName: "#firstname",
    lastName: "#lastname",
    address1: "#address1",
    city: "#city",
    state: "#id_state",
    postalCode: "#postcode",
    mobileNumber: "#phone_mobile",
    addressAlias: "#alias",
    registerButton: "#submitAccount",
    customerName: "//a[@title='View my customer account']/span[text()='<param>']",
    signOutLink: ".logout",
    emailAddress: "#email",
    signInButton: "#SubmitLogin",
    dressesLink: "//li[@class and a[@title='Dresses']]",
    product: "//div[@class='product-container']//a[@class='product-name']",
    priceOfProduct: "#our_price_display",
    addToCartButton: "#add_to_cart > button",
    proceedToCheckoutButton: "//a[@title='Proceed to checkout']",
    summaryStep: "[class='step_current  first']",
    addressStep: "[class='step_current third']",
    shippingStep: "[class='step_current four']",
    paymentStep: "[class='step_current last']",
    termsOfServiceCheckbox: "#cgv",
    colorOfDress: ".selected > a",
    sizeOfDress: "#group_1 > option[selected]",
    nameOfProduct: "h1[itemprop='name']",
    productReference: "span[itemprop='sku']",
    quantityOfProduct: "#quantity_wanted",
    shippingPrice: "div[class='delivery_option_price']",
    productNameInCart: ".cart_description > .product-name > a",
    cartReference: "//*[@class='cart_ref' and text()='SKU : <param>']",
    colorSizeOfProductInCart: "//p[@class='product-name']/following-sibling::small/a[text()='Color : <color>, Size : <size>']",
    unitPriceOfProduct: ".cart_unit > .price > [class='price special-price']",
    quantityOfProductInCart: "[class='cart_quantity text-center']",
    totalPriceOfProduct: ".cart_total > .price",
    shippingPriceInCart: "#total_shipping",
    searchBox: "#search_query_top",
    searchButton: "[name='submit_search']",
    checkoutButtonOnSummaryStep: "//a[@title='Proceed to checkout' and not(@rel)]",
    checkoutButtonOnAddressStep: "//button[@name='processAddress' and not(@rel)]",
    checkoutButtonOnShippingStep: "//button[@name='processCarrier' and not(@rel)]"
}