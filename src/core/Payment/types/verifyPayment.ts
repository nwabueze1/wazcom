/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyPayment
// ====================================================

export interface verifyPayment_verifyPayment {
  __typename: "verifyResponse";
  status: string | null;
  error_message: string | null;
  message: string;
  reference_id: string | null;
}

export interface verifyPayment {
  verifyPayment: verifyPayment_verifyPayment;
}

export interface verifyPaymentVariables {
  token: string;
}
