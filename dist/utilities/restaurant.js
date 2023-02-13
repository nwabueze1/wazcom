export var restaurantCoverImagePlaceholder = "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/restaurantplaceholder.png";
export var menuImagePlaceholder = "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/restaurantplaceholder.png";
export var emptyRestaurantPlaceholder = "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/undraw_cooking.png";
export var emptyCartImagePlaceholder = "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/empty_cart.png";
export var getFloatOrIntAmount = function (amount) {
    if (!amount)
        return "0";
    if (amount.toString().includes("."))
        return amount.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        });
    else
        return amount.toLocaleString("en-US");
};
export var getCurrency = function (currency) {
    var symbol = "";
    switch (currency) {
        case "USD":
            symbol = "$";
            break;
        case "NGN":
            symbol = "N";
            break;
        case "GBP":
            symbol = "£";
            break;
        default:
            symbol = "$";
            break;
    }
    return symbol;
};
export var parseMenuTime = function (time) {
    if (!time)
        return "";
    var hour = Number(time.slice(0, 2));
    return (String(hour > 12 ? hour - 12 : hour == 0 ? 12 : hour) +
        time.slice(2, 5) +
        (hour >= 12 ? " PM" : " AM"));
};
