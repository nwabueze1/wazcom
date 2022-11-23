/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoreMenuItemFields } from "./CoreMenuItemFields";
import { CoreRestaurantFields } from "./CoreRestaurantFields";

// ====================================================
// GraphQL fragment: CoreCartFields
// ====================================================

export interface CoreCartFields_cartItems {
    uuid: string | null;
    quantity: string;
    detail: string;
    options: any | null;
    menuItem: CoreMenuItemFields;
}

export interface CoreCartFields {
    uuid: string;
    currency: string;
    expires: any;
    cartItems: CoreCartFields_cartItems[] | null;
    restaurant: CoreRestaurantFields;
}
