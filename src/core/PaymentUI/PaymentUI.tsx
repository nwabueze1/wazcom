import { FC, useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../helpers/graphQL";
import { CoreCartFields } from "./models";
import { notify } from "../../helpers";
import { getCurrency } from "../../utilities";
import { Button } from "../";
import { TemplateState } from "./types";
import { useMakeGlobalPayments } from "./globalPayment";
import { GET_GATEWAY_PROCESSORS_BY_SITE, GET_PAYMENT_TYPE_BY_SITE } from "./graphql";
import { paymentImages } from "./helpers";
import { useCreateOrder } from "./hooks";
import { usePaymentStyles } from "./styles";
import { PaymentProviderProps, PaymentType, SitePaymentType } from "./types";
import { PaymentOption } from "./components";
import { calculateCartSubTotal } from "./helpers";
import clx from "classnames";

export const PaymentUI: FC<PaymentProviderProps> = ({
  displayButton,
  onSuccess,
  classNames,
  block_uuid,
}) => {
  const {
    restaurant,
    gatewayUrl,
    loading: ctxtLoading,
    networkOperation,
  } = useSelector<TemplateState, TemplateState>((state) => state);
  const cart = restaurant?.cart as CoreCartFields;
  const plutusClient = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);
  const classes = usePaymentStyles();
  const subTotal = calculateCartSubTotal(cart);
  const deliveryFee = !cart?.guest?.firstname
    ? Number(cart?.restaurant?.bank_info?.delivery_fee)
    : cart?.guest?.address?.uuid
    ? Number(cart?.restaurant?.bank_info?.delivery_fee)
    : 0;
  const total = subTotal + deliveryFee;
  const currency = restaurant?.cart?.restaurant?.bank_info?.currency ?? "";
  const [selectedMethod, setSelectedMethod] = useState("");
  const [sitePaymentMethodList, setSitePaymentMethodList] = useState<SitePaymentType[]>([]);
  const createOrder = useCreateOrder();
  const makeGlobalPayments = useMakeGlobalPayments();

  const activePaymentMethods = useMemo(() => {
    if (!sitePaymentMethodList) return [];

    return sitePaymentMethodList?.filter(({ is_active }: { is_active: boolean }) => is_active);
  }, [sitePaymentMethodList]);

  const {
    data: sitePaymentMethodListData,
    error: sitePaymentMethodError,
    loading,
  } = useQuery(GET_PAYMENT_TYPE_BY_SITE, {
    client: plutusClient,
    variables: {
      site_uuid: cart?.restaurant.site.uuid,
    },
  });
  const { data: gatewayProcessorsData, error: gatewayProcessorsError } = useQuery(
    GET_GATEWAY_PROCESSORS_BY_SITE,
    {
      client: plutusClient,
      variables: {
        input: {
          site_uuid: cart?.restaurant.site.uuid,
        },
      },
    },
  );

  useEffect(() => {
    if (gatewayProcessorsData) {
      const { getGatewayProcessorsBySiteUuid } = gatewayProcessorsData;

      if (getGatewayProcessorsBySiteUuid && getGatewayProcessorsBySiteUuid.length > 0) {
        const gatewayPaymentMethod = getGatewayProcessorsBySiteUuid[0];
        const paymentMethods = gatewayPaymentMethod?.is_active
          ? [
              {
                is_active: true,
                uuid: "",
                payment_type: {
                  uuid: gatewayPaymentMethod?.payment_type_uuid,
                  name: "Hivedeck Payment",
                },
              },
              ...sitePaymentMethodList,
            ]
          : sitePaymentMethodList;

        setSitePaymentMethodList(paymentMethods);

        const activePaymentMethods = paymentMethods.filter(
          ({ is_active }: { is_active: boolean }) => is_active,
        );
        if (activePaymentMethods.length === 1) {
          const paymentMethod = activePaymentMethods[0];
          setSelectedMethod(paymentMethod?.payment_type?.name);
        }
      }
    }
  }, [gatewayProcessorsError, gatewayProcessorsData]);

  useEffect(() => {
    if (sitePaymentMethodListData) {
      let { getPaymentTypesBySiteUuid } = sitePaymentMethodListData;
      if (sitePaymentMethodList.length > 0) {
        getPaymentTypesBySiteUuid = [...sitePaymentMethodList, ...getPaymentTypesBySiteUuid];
      } else {
        getPaymentTypesBySiteUuid = [...getPaymentTypesBySiteUuid];
      }

      setSitePaymentMethodList(getPaymentTypesBySiteUuid);
    }
  }, [sitePaymentMethodError, sitePaymentMethodListData]);

  const handleCreateOrder = async () => {
    if (!selectedMethod) {
      notify("error", "Select a payment option");
      return;
    }

    const userPaymentMethod: SitePaymentType = sitePaymentMethodList.filter(
      (paymentMethod: SitePaymentType) => paymentMethod?.payment_type?.name === selectedMethod,
    )?.[0];

    let payment_type: PaymentType | undefined = userPaymentMethod?.payment_type;

    if (userPaymentMethod?.payment_type?.name?.toLowerCase() !== "cash on delivery")
      payment_type = undefined;

    const order = await createOrder(payment_type, payment_type ? onSuccess : undefined);
    const guest = cart?.guest;
    makeGlobalPayments(cart, userPaymentMethod, order, guest, block_uuid);
  };

  const displayPaymentMethods = () => {
    return (
      <>
        {activePaymentMethods.map((paymentMethod: SitePaymentType, index) => {
          let title = paymentMethod?.payment_type?.name ?? "";
          if (title === "paypal") {
            title = "PayPal";
          } else if (title === "Cash_On_Delivery") {
            title = "Cash On Delivery";
          } else if (title === "Hivedeck_Payment") {
            title = "Hivedeck Payment";
          } else {
            title = title.trim().charAt(0).toUpperCase() + title.trim().substring(1).toLowerCase();
          }
          const props = {
            img:
              paymentImages[paymentMethod?.payment_type?.name.toLowerCase()] ??
              paymentImages.default,
            name: paymentMethod?.payment_type?.name,
            title: title,
            value: paymentMethod?.payment_type?.name,
          };
          return (
            <PaymentOption
              key={index}
              {...props}
              value={String(selectedMethod ?? "")}
              className={classNames?.paymentOption}
              handleChange={(method: any) => {
                setSelectedMethod(method);
              }}
            />
          );
        })}
      </>
    );
  };

  if (loading)
    return (
      <div>
        <CircularProgress color="success" size="14px" />
      </div>
    );

  return (
    <div className={clx(classes.root, classNames?.root)}>
      <div className={clx(classes.paymentHeading, classNames?.paymentHeading)}>
        <p>Total</p>
        <p>
          {getCurrency(currency)}
          {total}
        </p>
      </div>

      {activePaymentMethods.length > 0 && (
        <div className={clx(classes.paymentSubheading, classNames?.paymentSubheading)}>
          <p className="heading">Make Payment</p>
          <p className="description">Select your preferred payment method below</p>
        </div>
      )}

      {displayPaymentMethods()}
      {displayButton && activePaymentMethods.length > 0 && (
        <Button
          size="medium"
          variant="contained"
          isLoading={ctxtLoading && networkOperation === "create.order"}
          onClick={handleCreateOrder}
          width={"100%"}
          className={classNames?.button}
        >
          Pay now
        </Button>
      )}
      {activePaymentMethods.length === 0 && (
        <p className={classes.paymentEmptyText}>There are no configured payment methods</p>
      )}
    </div>
  );
};
