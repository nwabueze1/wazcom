
export type PaymentMethod = {
    type: 'Cash_On_Delivery' | 'Bank_Transfer' | 'STRIPE' | 'PAYPAL';
    config: any;
}