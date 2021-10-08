export interface makePayment_makePayment {
    __typename: "paymentResponse";
    status: string;
    error_message: string | null;
    orderId: string | null;
    redirect_url: string | null;
}
export interface makePayment {
    makePayment: makePayment_makePayment;
}
export interface makePaymentVariables {
    order_id: string;
}
