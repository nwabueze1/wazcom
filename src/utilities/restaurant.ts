export const restaurantCoverImagePlaceholder =
  "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/restaurantplaceholder.png";

export const menuImagePlaceholder =
  "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/restaurantplaceholder.png";

export const emptyRestaurantPlaceholder =
  "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/undraw_cooking.png";

export const emptyCartImagePlaceholder =
  "https://s3.eu-west-2.amazonaws.com/medusa.com/Restaurant/empty_cart.png";

export const getFloatOrIntAmount = (amount?: number): string => {
  if (!amount) return "0";
  if (amount.toString().includes("."))
    return amount.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  else return amount.toLocaleString("en-US");
};

export const getCurrency = (currency: string) => {
  let symbol = "";

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

export const parseMenuTime = (time: string) => {
  if (!time) return "";
  const hour = Number(time.slice(0, 2));
  return (
    String(hour > 12 ? hour - 12 : hour == 0 ? 12 : hour) +
    time.slice(2, 5) +
    (hour >= 12 ? " PM" : " AM")
  );
};
