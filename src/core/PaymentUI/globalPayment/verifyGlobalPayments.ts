import { notify } from "../../../helpers";
import { useSelector } from "react-redux";
import {
  useVerifyAdyenPayment,
  useVerifyFincraPayment,
  useVerifyFlutterwavePayment,
  useVerifyMolliePayment,
  useVerifyNodaPayment,
  useVerifyPayment,
  useVerifyPaypalPayment,
  useVerifyPaystackPayment,
  useVerifySeerBitPayment,
  useVerifyStripePayment,
} from "../hooks";
import { useUpdateOrder, useRecordCartAction } from "../hooks";
import { TemplateState } from "../types";
import { CoreCartFields } from "../models";

export const useVerifyGlobalPayments = () => {
  const { restaurant } = useSelector<TemplateState, TemplateState>(
    (state) => state
  );
  const cart = restaurant?.cart as CoreCartFields;
  const verifyPayment = useVerifyPayment();
  const verifyFlutterwavePayment = useVerifyFlutterwavePayment();
  const verifyNodaPayment = useVerifyNodaPayment();
  const verifyPaystackPayment = useVerifyPaystackPayment();
  const verifyFincraPayment = useVerifyFincraPayment();
  const verifySeerBitPayment = useVerifySeerBitPayment();
  const verifyStripePayment = useVerifyStripePayment();
  const verifyPaypalPayment = useVerifyPaypalPayment();
  const verifyAdyenPayment = useVerifyAdyenPayment();
  const verifyMolliePayment = useVerifyMolliePayment();
  const recordCartAction = useRecordCartAction();
  const updateOrder = useUpdateOrder();

  return async (block_uuid: string, onCompletion?: () => void, onError?: () => void) => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentType = urlParams.get("hivedeck_payment_type") ?? "";

    switch (paymentType) {
      case "Hivedeck Payment": 
        {
          const status = urlParams.get("status") ?? "";
          const tx_ref = urlParams.get("tx_ref") ?? "";
          const transaction_id = urlParams.get("transaction_id") ?? "";

          if (status.toLowerCase() === "cancelled") {
            notify("error", "There was a problem completing payment");
            onError?.();
            return;
          }

          verifyPayment({
            site_uuid: cart.restaurant.site.uuid,
            status: status == "successful" ? "success" : status,
            tx_ref: tx_ref,
            tx_id: Number(transaction_id),
          })
            .then(async () => {
              await updateOrder(paymentType);
              recordCartAction(block_uuid ?? "", "payment_confirmed");
              onCompletion?.();
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "flutterwave":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const transaction_id = urlParams.get("transaction_id") ?? "";
          const status = urlParams.get("status") ?? "";

          if (status.toLowerCase() === "cancelled") {
            notify("error", "There was a problem completing payment");
            onError?.();
            return;
          }

          verifyFlutterwavePayment({
            site_payment_uuid: site_payment_uuid,
            transaction_id: transaction_id,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "noda":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const paymentId = urlParams.get("id") ?? "";
          verifyNodaPayment({
            site_payment_uuid: site_payment_uuid,
            paymentId: paymentId,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "paystack":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const reference = urlParams.get("reference") ?? "";
          verifyPaystackPayment({
            site_payment_uuid: site_payment_uuid,
            reference: reference,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "fincra":
        {
          const site_payment_uuid_concat =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const split_fincra = site_payment_uuid_concat.split("?reference=");
          const site_payment_uuid = split_fincra[0] ?? "";
          const referenceId = split_fincra[1] ?? "";
          verifyFincraPayment({
            site_payment_uuid: site_payment_uuid,
            referenceId: referenceId,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "seerbit":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const paymentReference = urlParams.get("reference") ?? "";
          const message = urlParams.get("message") ?? "";

          if (message.toLowerCase().includes("cancelled")) {
            notify("error", "There was a problem completing payment");
            onError?.();
            return;
          }

          verifySeerBitPayment({
            site_payment_uuid: site_payment_uuid,
            paymentReference: paymentReference,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "stripe":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const session_uuid = urlParams.get("session_uuid") ?? "";
          const hivedeck_status = urlParams.get("hivedeck_status") ?? "";

          if (hivedeck_status.toLowerCase() === "canceled") {
            notify("error", "There was a problem completing payment");
            onError?.();
            return;
          }

          verifyStripePayment({
            site_payment_uuid: site_payment_uuid,
            session_uuid: session_uuid,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "paypal":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const paymentId = urlParams.get("paymentId") ?? "";
          const payerId = urlParams.get("PayerID") ?? "";
          const hivedeck_status = urlParams.get("hivedeck_status") ?? "";

          if (hivedeck_status.toLowerCase() === "canceled") {
            notify("error", "There was a problem completing payment");
            onError?.();
            return;
          }

          verifyPaypalPayment({
            site_payment_uuid: site_payment_uuid,
            paymentId: paymentId,
            payerId: payerId,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "adyen":
        {
          const site_payment_uuid =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const paymentSession = urlParams.get("paymentSession") ?? "";
          verifyAdyenPayment({
            site_payment_uuid: site_payment_uuid,
            paymentSession: paymentSession,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
      case "mollie":
        {
          const site_payment_uuid_concat =
            urlParams.get("hivedeck_site_payment_uuid") ?? "";
          const split_mollie = site_payment_uuid_concat.split("?id=");
          const site_payment_uuid = split_mollie[0] ?? "";
          const paymentId = split_mollie[1] ?? "";
          verifyMolliePayment({
            site_payment_uuid: site_payment_uuid,
            paymentId: paymentId,
          })
            .then(async (res: any) => {
              if (res.status) {
                await updateOrder(paymentType);
                recordCartAction(block_uuid ?? "", "payment_confirmed");
                onCompletion?.();
              }
            })
            .catch(() => {
              notify("error", "There was a problem completing payment");
              onError?.();
            })
        }
        break;
    }
  };
};
