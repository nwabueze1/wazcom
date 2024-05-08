import { gql } from "@apollo/client";

const CORE_ORDER_FIELDS = gql`
  fragment CoreOrderFields on Order {
    uuid
    currency_code
    grand_total
    payment_type
    order_type
  }
`;

export const CREATE_ORDER = gql`
  ${CORE_ORDER_FIELDS}
  mutation GqlCreateOrder(
    $grand_total: Float
    $address_uuid: ID
    $payment_type: PaymentType
    $cart_uuid: ID
  ) {
    createOrder(
      input: {
        grand_total: $grand_total
        address_uuid: $address_uuid
        payment_type: $payment_type
        cart_uuid: $cart_uuid
      }
    ) {
      ...CoreOrderFields
    }
  }
`;

export const UPDATE_ORDER = gql`
  ${CORE_ORDER_FIELDS}
  mutation GqlUpdateOrder(
    $payment_type: PaymentType
    $uuid: ID!
  ) {
    updateOrder(
      input: {
        payment_type: $payment_type
        uuid: $uuid
      }
    ) {
      ...CoreOrderFields
    }
  }
`;

export const MAKE_FLUTTERWAVE_PAYMENT = gql`
  mutation GqlMakePaymentWithFlutterwave($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithFlutterwave(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_NODA_PAYMENT = gql`
  mutation GqlMakePaymentWithNoda($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithNoda(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_ADYEN_PAYMENT = gql`
  mutation GqlMakePaymentWithAdyen($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithAdyen(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_FINCRA_PAYMENT = gql`
  mutation GqlMakePaymentWithFincra($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithFincra(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_NEW_PAYPAL_PAYMENT = gql`
  mutation GqlMakePaymentWithPaypal($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithPaypal(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_PAYSTACK_PAYMENT = gql`
  mutation GqlMakePaymentWithPaystack($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithPaystack(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_SEEBIT_PAYMENT = gql`
  mutation GqlMakePaymentWithSeebit($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithSeebit(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_STRIPE_PAYMENT = gql`
  mutation GqlMakePaymentWithStripe($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithStripe(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_MOLLIE_PAYMENT = gql`
  mutation GqlMakePaymentWithMollie($body: JSONObject!, $site_payment_uuid: String!) {
    makePaymentWithMollie(
      body: $body, site_payment_uuid: $site_payment_uuid
    )
  }
`;

export const MAKE_PAYPAL_PAYMENT = gql`
  mutation GqlMakePaypalPayment($order_uuid: ID, $pageRedirect: String) {
    makePaypalDirectPayment(
      input: { type: FOOD_ORDER, order_uuid: $order_uuid, pageRedirect: $pageRedirect }
    ) {
      status
      redirect_url
      error_message
    }
  }
`;

export const INITIATE_PAYMENT = gql`
  mutation GqlInitiatePayment($input: initiateGatewayPaymentInput) {
    initiateGatewayPayment(input: $input) {
      link
    }
  }
`;

export const VERIFY_PAYMENT = gql`
  mutation GqlVerifyPayment($input: verifyGatewayPaymentInput) {
    verifyGatewayPayment(input: $input) {
      uuid
      status
      payment_type_uuid
      amount
      details
    }
  }
`;