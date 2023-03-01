export type PaymentMethod = {
  type: "Cash_On_Delivery" | "Bank_Transfer" | "Stripe" | "PAYPAL";
  config: any;
};
