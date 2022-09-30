/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreCartFields
// ====================================================

export interface CoreCartFields_guest {
    __typename: "Guest";
    id: string | null;
}

export interface CoreCartFields_customer_active_address {
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

export interface CoreCartFields_customer {
    __typename: "Customer";
    id: string;
    firstname: string;
    lastname: string;
    email: string | null;
    active_address: CoreCartFields_customer_active_address | null;
    created_at: any;
    updated_at: any;
}

export interface CoreCartFields_cartItems_menuItem_menuCategory {
    __typename: "MenuCategory";
    id: string;
    uuid: string;
    title: string;
    status: boolean;
    position: number;
    created_at: any;
    updated_at: any;
}

export interface CoreCartFields_cartItems_menuItem {
    __typename: "MenuItem";
    id: string;
    uuid: string;
    name: string;
    status: boolean | null;
    description: string;
    price: number;
    image_url: string | null;
    created_at: any;
    updated_at: any;
    options: (string | null)[] | null;
    menuCategory: CoreCartFields_cartItems_menuItem_menuCategory | null;
}

export interface CoreCartFields_cartItems {
    __typename: "CartItem";
    id: string;
    detail: string;
    quantity: string;
    options: any | null;
    created_at: any;
    updated_at: any;
    menuItem: CoreCartFields_cartItems_menuItem;
}

export interface CoreCartFields {
    __typename: "Cart";
    id: string;
    uuid: string;
    expires: any;
    created_at: any;
    updated_at: any;
    guest: CoreCartFields_guest | null;
    customer: CoreCartFields_customer | null;
    cartItems: CoreCartFields_cartItems[] | null;
}
