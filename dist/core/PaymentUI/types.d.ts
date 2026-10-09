import { CoreCartFields, CoreSiteFields } from "./models";
export type PaymentProviderProps = {
    displayButton?: boolean;
    onSuccess?: () => void;
    block_uuid?: string;
    classNames?: {
        [key in "root" | "paymentHeading" | "paymentSubheading" | "paymentOption" | "button"]?: any;
    };
};
export type PaymentType = {
    uuid: string;
    name: string;
};
export type SitePaymentType = {
    is_active: boolean;
    uuid: string;
    payment_type: PaymentType;
};
type RestaurantState = {
    cart?: CoreCartFields;
};
export type PageState = {
    uuid: string;
    title: string;
    status: boolean;
    description: string | null;
    metadata: string | null;
    site?: CoreSiteFields;
};
export type TemplateState = {
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    restaurant?: RestaurantState;
    loading?: boolean;
    networkOperation?: string;
};
export interface InitiatePaymentInputType {
    full_name: string;
    email: string;
    phone_number: string;
    amount: number;
    redirect_url: string;
    site_uuid: string;
    description?: string;
    metadata?: {
        [key: string]: any;
    };
}
export interface VerifyPaymentInputType {
    site_uuid: string;
    tx_ref: string;
    tx_id?: number;
    status: string;
}
export interface VerifyNodaPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    paymentId: string;
}
export interface VerifyFlutterwavePaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    transaction_id: string;
}
export interface VerifyAdyenPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    paymentSession: string;
}
export interface VerifyFincraPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    referenceId: string;
}
export interface VerifyMolliePaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    paymentId: string;
}
export interface VerifyPaypalPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    paymentId: string;
    payerId?: string;
}
export interface VerifyPaystackPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    reference: string;
}
export interface VerifySeebitPaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    paymentReference: string;
}
export interface VerifyStripePaymentInputType {
    site_payment_uuid: string;
    customer_uuid?: string;
    delivery_uuid?: number;
    session_uuid: string;
}
export {};
