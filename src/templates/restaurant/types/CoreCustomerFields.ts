/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreCustomerFields
// ====================================================

export interface CoreCustomerFields_active_address {
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

export interface CoreCustomerFields {
    __typename: "Customer";
    id: string;
    firstname: string;
    lastname: string;
    email: string | null;
    active_address: CoreCustomerFields_active_address | null;
    created_at: any;
    updated_at: any;
}
