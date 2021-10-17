/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: checkSellerStatus
// ====================================================

export interface checkSellerStatus_checkSellerStatus {
  __typename: "paymentResponse";
  status: string;
  error_message: string | null;
  data: string | null;
  client_id: string | null;
  merchant_client_id: string | null;
  orderId: string | null;
  primary_email_confirmed: boolean | null;
}

export interface checkSellerStatus {
  checkSellerStatus: checkSellerStatus_checkSellerStatus;
}

export interface checkSellerStatusVariables {
  sellerPayPalId: string;
}
