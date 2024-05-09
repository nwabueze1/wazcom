import { gql } from "@apollo/client";

export const GET_PAYMENT_METHODS = gql`
  query GqlGetPaymentMethods {
    getPaymentMethods {
      uuid
      name
      requirements
    }
  }
`;

export const GET_PAYMENT_TYPE_BY_SITE = gql`
  query GqlGetPaymentTypesBySiteUuid(
    $site_uuid: String!
  ) {
    getPaymentTypesBySiteUuid(site_uuid: $site_uuid) {
      is_active
      uuid
      payment_type {
        name
        uuid
      }
    }
  }
`;

export const GET_GATEWAY_PROCESSORS_BY_SITE = gql`
  query GqlGetPaymentProcessorsBySiteUuid(
    $input: GetGatewayProcessorsBySiteUuidInput!
  ) {
    getGatewayProcessorsBySiteUuid(input: $input) {
      payment_type_uuid
      is_active
    }
  }
`;

export const VERIFY_NODA_PAYMENT = gql`
  query GqlVerifyNodaPayment($customer_uuid: String, $delivery_uuid: String, $paymentId: String, $site_payment_uuid: String!) {
    verifyNodaPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, paymentId: $paymentId, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_FLUTTERWAVE_PAYMENT = gql`
  query GqlVerifyFlutterwavePayment($customer_uuid: String, $delivery_uuid: String, $transaction_id: String, $site_payment_uuid: String!) {
    verifyFlutterwavePayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, transaction_id: $transaction_id, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_ADYEN_PAYMENT = gql`
  query GqlVerifyAdyenPayment($customer_uuid: String, $delivery_uuid: String, $paymentSession: String, $site_payment_uuid: String!) {
    verifyAdyenPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, paymentSession: $paymentSession, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_FINCRA_PAYMENT = gql`
  query GqlVerifyFincraPayment($customer_uuid: String, $delivery_uuid: String, $referenceId: String, $site_payment_uuid: String!) {
    verifyFincraPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, referenceId: $referenceId, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_MOLLIE_PAYMENT = gql`
  query GqlVerifyMolliePayment($customer_uuid: String, $delivery_uuid: String, $paymentId: String, $site_payment_uuid: String!) {
    verifyMolliePayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, paymentId: $paymentId, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_PAYPAL_PAYMENT = gql`
  query GqlVerifyPaypalPayment($customer_uuid: String, $delivery_uuid: String, $paymentId: String, $payerId: String, $site_payment_uuid: String!) {
    verifyPaypalPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, paymentId: $paymentId, payerId: $payerId, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_PAYSTACK_PAYMENT = gql`
  query GqlVerifyPaystackPayment($customer_uuid: String, $delivery_uuid: String, $reference: String, $site_payment_uuid: String!) {
    verifyPaystackPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, reference: $reference, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_SEEBIT_PAYMENT = gql`
  query GqlVerifySeeBitPayment($customer_uuid: String, $delivery_uuid: String, $paymentReference: String, $site_payment_uuid: String!) {
    verifySeeBitPayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, paymentReference: $paymentReference, site_payment_uuid: $site_payment_uuid)
  }
`;

export const VERIFY_STRIPE_PAYMENT = gql`
  query GqlVerifyStripePayment($customer_uuid: String, $delivery_uuid: String, $session_uuid: String, $site_payment_uuid: String!) {
    verifyStripePayment(customer_uuid: $customer_uuid, delivery_uuid: $delivery_uuid, session_uuid: $session_uuid, site_payment_uuid: $site_payment_uuid)
  }
`;
