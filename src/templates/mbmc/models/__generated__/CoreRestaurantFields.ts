/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreRestaurantFields
// ====================================================

export interface CoreRestaurantFields_bank_info {
  currency: string | null;
  delivery_fee: number | null;
}

export interface CoreRestaurantFields {
  id: string;
  site_uuid: string;
  uuid: string;
  bank_info: CoreRestaurantFields_bank_info | null;
}
