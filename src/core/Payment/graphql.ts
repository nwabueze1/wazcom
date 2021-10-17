import { gql } from "@apollo/client";

export const ONBOARD_SELLER = gql`
mutation onBoardSeller($userId: ID!) {
  onBoardSeller(userId: $userId) {
    redirect_url
    status
    error_message
  }
}
`;

export const ONBOARD_STATUS = gql`
mutation  checkSellerStatus($sellerPayPalId: ID!) {
  checkSellerStatus(sellerPayPalId: $sellerPayPalId) {
    status
    error_message
    data
    client_id
    merchant_client_id
    error_message
    orderId
    primary_email_confirmed
  }
}
`;
export const MAKE_PAYMENT = gql`
mutation  makePayment($order_id: ID!) {
  makePayment(order_id: $order_id) {
    status
    error_message
    orderId
    redirect_url
  }
}
`;

export const VERIFY_PAYMENT = gql`
mutation verifyPayment($token: ID!) {
  verifyPayment(token: $token) {
    status
    error_message
    message
    reference_id
  }
}
`;

export const STORE_PAYPAL = gql`
mutation  storeUserPayPal($site_id: ID!,$merchant_id: ID!) {
  storeUserPayPal(site_id: $site_id, merchant_id: $merchant_id) {
    merchant_id
    site_id
  }
}
`;