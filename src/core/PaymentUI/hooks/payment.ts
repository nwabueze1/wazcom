import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { createApolloClient } from "../../../helpers/graphQL";
import { TemplateState } from "../types";
import { notify } from "../../../helpers";
import {
  INITIATE_PAYMENT,
  MAKE_ADYEN_PAYMENT,
  MAKE_FINCRA_PAYMENT,
  MAKE_FLUTTERWAVE_PAYMENT,
  MAKE_MOLLIE_PAYMENT,
  MAKE_NEW_PAYPAL_PAYMENT,
  MAKE_NODA_PAYMENT,
  MAKE_PAYPAL_PAYMENT,
  MAKE_PAYSTACK_PAYMENT,
  MAKE_SEEBIT_PAYMENT,
  MAKE_STRIPE_PAYMENT,
  VERIFY_ADYEN_PAYMENT,
  VERIFY_FINCRA_PAYMENT,
  VERIFY_FLUTTERWAVE_PAYMENT,
  VERIFY_MOLLIE_PAYMENT,
  VERIFY_NODA_PAYMENT,
  VERIFY_PAYMENT,
  VERIFY_PAYPAL_PAYMENT,
  VERIFY_PAYSTACK_PAYMENT,
  VERIFY_SEEBIT_PAYMENT,
  VERIFY_STRIPE_PAYMENT,
} from "../graphql";
import {
  InitiatePaymentInputType,
  SitePaymentType,
  VerifyAdyenPaymentInputType,
  VerifyFincraPaymentInputType,
  VerifyFlutterwavePaymentInputType,
  VerifyMolliePaymentInputType,
  VerifyNodaPaymentInputType,
  VerifyPaymentInputType,
  VerifyPaypalPaymentInputType,
  VerifyPaystackPaymentInputType,
  VerifySeebitPaymentInputType,
  VerifyStripePaymentInputType,
} from "../types";

export const useGlobalPaymentMethod = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (body: any, sitePaymentType: SitePaymentType) => {
    try {
      switch (sitePaymentType.payment_type.name) {
        case "flutterwave":
          return flutterwavePayment(client, body, sitePaymentType);
        case "noda":
          return nodaPayment(client, body, sitePaymentType);
        case "adyen":
          return adyenPayment(client, body, sitePaymentType);
        case "paystack":
          return paystackPayment(client, body, sitePaymentType);
        case "fincra":
          return fincraPayment(client, body, sitePaymentType);
        case "seerbit":
          return seerbitPayment(client, body, sitePaymentType);
        case "stripe":
          return stripePayment(client, body, sitePaymentType);
        case "paypal":
          return paypalPayment(client, body, sitePaymentType);
        case "mollie":
          return molliePayment(client, body, sitePaymentType);
        default:
          return flutterwavePayment(client, body, sitePaymentType);
      }
    } catch (error) {
      notify("error", "We could not complete that operation");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
    }
  };
};

const flutterwavePayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_FLUTTERWAVE_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithFlutterwave?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithFlutterwave?.redirect_url;
};

const nodaPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_NODA_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithNoda?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithNoda?.redirect_url;
};

const adyenPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_ADYEN_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithAdyen?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithAdyen?.redirect_url;
};

const fincraPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_FINCRA_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithFincra?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithFincra?.redirect_url;
};

const paypalPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_NEW_PAYPAL_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithPaypal?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithPaypal?.redirect_url;
};

const paystackPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_PAYSTACK_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithPaystack?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithPaystack?.redirect_url;
};

const seerbitPayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_SEEBIT_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithSeebit?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithSeebit?.redirect_url;
};

const stripePayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_STRIPE_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithStripe?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithStripe?.redirect_url;
};

const molliePayment = async (
  client: ApolloClient<NormalizedCacheObject>,
  body: any,
  sitePaymentType: SitePaymentType
) => {
  const { data, errors } = await client.mutate({
    mutation: MAKE_MOLLIE_PAYMENT,
    variables: { body, site_payment_uuid: sitePaymentType.uuid },
  });

  if (!data || !data?.makePaymentWithMollie?.redirect_url || errors) {
    return notify("error", "We could not complete that operation");
  }

  window.location.href = data?.makePaymentWithMollie?.redirect_url;
};

export const useVerifyFlutterwavePayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyFlutterwavePaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_FLUTTERWAVE_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyFlutterwavePayment.status ||
        data.verifyFlutterwavePayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyFlutterwavePayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyNodaPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyNodaPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_NODA_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyNodaPayment.status ||
        data.verifyNodaPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyNodaPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyAdyenPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyAdyenPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_ADYEN_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyAdyenPayment.status ||
        data.verifyAdyenPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyAdyenPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyFincraPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyFincraPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_FINCRA_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyFincraPayment.status ||
        data.verifyFincraPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyFincraPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyMolliePayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyMolliePaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_MOLLIE_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyMolliePayment.status ||
        data.verifyMolliePayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyMolliePayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyPaypalPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyPaypalPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_PAYPAL_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyPaypalPayment.status ||
        data.verifyPaypalPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyPaypalPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyPaystackPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyPaystackPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_PAYSTACK_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyPaystackPayment.status ||
        data.verifyPaystackPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyPaystackPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifySeerBitPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifySeebitPaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_SEEBIT_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifySeeBitPayment.status ||
        data.verifySeeBitPayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifySeeBitPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useVerifyStripePayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyStripePaymentInputType) => {
    try {
      const { data, errors } = await client.query({
        query: VERIFY_STRIPE_PAYMENT,
        variables: {
          ...variables,
        },
      });
      if (
        !data ||
        !data.verifyStripePayment.status ||
        data.verifyStripePayment.status == "error" ||
        errors
      )
        throw new Error("We could not complete that operation");

      return data.verifyStripePayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const usePaypalPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (order_uuid: string) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: MAKE_PAYPAL_PAYMENT,
        variables: { order_uuid, pageRedirect: window.location.pathname },
      });

      if (!data || !data?.makePaypalDirectPayment?.redirect_url || errors)
        throw new Error("We could not complete that operation");

      const {
        makePaypalDirectPayment: { redirect_url },
      } = data;
      window.location.href = redirect_url;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }
  };
};

export const useInitiatePayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: InitiatePaymentInputType) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: INITIATE_PAYMENT,
        variables: {
          input: {
            ...variables,
          },
        },
      });
      if (!data || !data?.initiateGatewayPayment?.link || errors)
        throw new Error("We could not complete that operation");

      const {
        initiateGatewayPayment: { link },
      } = data;
      window.location.href = link;
    } catch (e) {
      notify("error", "We could not complete that operation");
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
    }
  };
};

export const useVerifyPayment = () => {
  const { gatewayUrl } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: VerifyPaymentInputType) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: VERIFY_PAYMENT,
        variables: {
          input: {
            ...variables,
          },
        },
      });
      if (!data || !data?.verifyGatewayPayment?.uuid || errors)
        throw new Error("We could not complete that operation");

      return data.verifyGatewayPayment;
    } catch (e) {
      notify("error", "We could not complete that operation");
    }
  };
};
