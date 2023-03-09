/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoreGuestFields } from "./CoreGuestFields";
import { CoreMenuItemFields } from "./CoreMenuItemFields";
import { CoreOrderFields } from "./CoreOrderFields";
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
  currentStep?: number;
  guest?: CoreGuestFields;
  order?: CoreOrderFields;
  cartItems: CoreCartFields_cartItems[] | null;
  restaurant: CoreRestaurantFields;
}
