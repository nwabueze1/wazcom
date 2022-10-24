import { PaymentType, Status } from "./globalTypes";
export interface CoreOrderFields_customer_active_address {
    __typename: "Address";
    id: string;
    addressline1: string;
    addressline2: string | null;
    phone: string;
    country: string;
    state: string;
    city: string;
    postcode: string;
    created_at: any;
    updated_at: any;
}
export interface CoreOrderFields_customer {
    __typename: "Customer";
    id: string;
    firstname: string;
    lastname: string;
    email: string | null;
    active_address: CoreOrderFields_customer_active_address | null;
    created_at: any;
    updated_at: any;
}
export interface CoreOrderFields {
    __typename: "Order";
    id: string;
    uuid: string;
    currency_code: string;
    grand_total: number;
    status: Status | null;
    payment_type: PaymentType | null;
    customer: CoreOrderFields_customer | null;
    created_at: any;
    updated_at: any;
}
