import { CoreCartFields, CoreCartItemFields, CoreGuestFields } from "../models";
import { calculateCartSubTotal, getTotalChargeAmount } from "../helpers";
import { useGlobalPaymentMethod, useInitiatePayment, useRecordCartAction } from "../hooks";
import { SitePaymentType } from "../types";

export const useMakeGlobalPayments = () => {
  const globalPaymentMethod = useGlobalPaymentMethod();
  const initiatePayment = useInitiatePayment();
  const recordCartAction = useRecordCartAction();

  return async (
    cart: CoreCartFields,
    userPaymentMethod: SitePaymentType,
    order: any,
    guest: CoreGuestFields | undefined,
    block_uuid: string | undefined,
  ) => {
    let body = {};

    const redirect_url =
      window.location.href +
      `?hivedeck_order_uuid=${order.uuid}&hivedeck_cart_uuid=${cart.uuid}&hivedeck_payment_type=${userPaymentMethod.payment_type.name}&hivedeck_site_payment_uuid=${userPaymentMethod.uuid}`;
    const cancel_url = redirect_url + "&hivedeck_status=canceled";

    switch (userPaymentMethod.payment_type.name) {
      case "Cash on delivery":
        break;
      case "Hivedeck Payment":
        await initiatePayment({
          site_uuid: cart?.restaurant.site.uuid,
          email: cart?.guest?.email ?? "",
          phone_number: guest?.phone ?? "",
          amount: getTotalChargeAmount(cart),
          full_name: `${guest?.firstname} ${guest?.lastname}`,
          redirect_url: redirect_url,
          metadata: {
            order_uuid: order.uuid,
          },
        });
        break;
      case "flutterwave":
        body = {
          amount: getTotalChargeAmount(cart),
          email: cart?.guest?.email ?? "",
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          phone_number: guest?.phone ?? "",
          callback: redirect_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "noda":
        body = {
          amount: getTotalChargeAmount(cart),
          email: cart?.guest?.email ?? "",
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          description: order.uuid ?? "",
          returnUrl: redirect_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "paystack":
        body = {
          fullname: `${guest?.firstname} ${guest?.lastname}`,
          amount: getTotalChargeAmount(cart),
          email: cart?.guest?.email ?? "",
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          callback: redirect_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "fincra":
        body = {
          amount: getTotalChargeAmount(cart),
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          callback: redirect_url,
          customer: {
            name: `${guest?.firstname} ${guest?.lastname}`,
            email: cart?.guest?.email ?? "",
            phoneNumber: guest?.phone ?? "",
          },
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "seerbit":
        body = {
          amount: getTotalChargeAmount(cart),
          callback:
            window.location.href +
            `?hivedeck_order_uuid=${order.uuid}&hivedeck_payment_type=${userPaymentMethod.payment_type.name}&hivedeck_site_payment_uuid=${userPaymentMethod.uuid}`,
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          email: cart?.guest?.email ?? "",
          country: cart?.guest?.address?.country ?? "",
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "stripe":
        const lineItems = cart?.cartItems?.map(
          (item: CoreCartItemFields) => {
            return {
              quantity: Number(item.quantity),
              price_data: {
                currency: cart?.restaurant?.bank_info?.currency ?? "",
                unit_amount:
                  (calculateCartSubTotal(cart, item?.uuid as string) * 100) / Number(item.quantity),
                product_data: {
                  name: item.menuItem.name,
                  description: item.menuItem.description,
                  images: [item.menuItem?.image?.src],
                },
              },
            };
          },
        );

        const deliveryFee = !cart?.guest?.firstname
          ? Number(cart?.restaurant?.bank_info?.delivery_fee)
          : cart?.guest?.address?.uuid
          ? Number(cart?.restaurant?.bank_info?.delivery_fee)
          : 0;

        if (deliveryFee) {
          lineItems?.push({
            quantity: 1,
            price_data: {
              currency: cart?.restaurant?.bank_info?.currency ?? "",
              unit_amount: deliveryFee * 100,
              product_data: {
                name: "Delivery",
                description: "Amount charged for delivery",
                images: [],
              },
            },
          });
        }

        body = {
          line_items: lineItems,
          success_url: redirect_url,
          cancel_url: cancel_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "paypal":
        body = {
          amount: getTotalChargeAmount(cart),
          description: order.uuid ?? "",
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          callback: redirect_url,
          cancel_url: cancel_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "adyen":
        body = {
          email: cart?.guest?.email ?? "",
          fullname: `${guest?.firstname} ${guest?.lastname}`,
          amount: getTotalChargeAmount(cart),
          currency: cart?.restaurant?.bank_info?.currency ?? "",
          callback: redirect_url,
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
      case "mollie":
        body = {
          amount: {
            currency: cart?.restaurant?.bank_info?.currency ?? "",
            value: getTotalChargeAmount(cart) + ".00",
          },
          description: order.uuid ?? "",
          redirectUrl: redirect_url,
          order_id: order.uuid ?? "",
        };
        globalPaymentMethod(body, userPaymentMethod);
        break;
    }

    recordCartAction(block_uuid ?? "", "payment_initiated");
  };
};
