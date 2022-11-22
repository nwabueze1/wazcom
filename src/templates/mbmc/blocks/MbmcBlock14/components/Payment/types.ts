
export type PaymentMethod = {
    type: 'Cash_On_Delivery' | 'Stripe' | 'Paypal';
    config: any;
}