
export type PaymentMethod = {
    type: 'Cash_On_Delivery' | 'STRIPE' | 'PAYPAL';
    config: any;
}