export interface CoreAddressFields {
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
