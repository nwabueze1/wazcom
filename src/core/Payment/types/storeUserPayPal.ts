/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeUserPayPal
// ====================================================

export interface storeUserPayPal_storeUserPayPal {
  __typename: "PayPalUser";
  merchant_id: string | null;
  site_id: string | null;
}

export interface storeUserPayPal {
  storeUserPayPal: storeUserPayPal_storeUserPayPal | null;
}

export interface storeUserPayPalVariables {
  site_id: string;
  merchant_id: string;
}
