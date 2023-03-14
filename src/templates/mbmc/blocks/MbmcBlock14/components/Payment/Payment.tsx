import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_PAYMENT_METHODS } from "./graphql";
import { PaymentMethod } from "./types";
import { CircularProgress } from "@mui/material";
import { PaymentOption, MbmcButton } from "../../../../components";
import { paymentMethodConfig } from "./helpers";
import { usePaymentStyles } from "./styles";
import { useCreateOrder } from "./hooks";
import { TAppState } from "../../../../../types";
import { CoreCartFields } from "../../../../models";
import { createApolloClient } from "../../../../../../helpers/graphQL";

export const Payment = () => {
  const {
    restaurant,
    gatewayUrl,
    loading: ctxtLoading,
    networkOperation,
  } = useSelector<TAppState, TAppState>((state) => state);
  const cart = restaurant?.cart as CoreCartFields;
  const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);
  const classes = usePaymentStyles();
  const { data, error, loading } = useQuery(GET_PAYMENT_METHODS, {
    client,
    variables: { service_uuid: cart?.restaurant?.uuid },
  });
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>();
  const createOrder = useCreateOrder();

  useEffect(() => {
    if (data) {
      const { getPaymentMethods: paymentMethods } = data;
      setPaymentMethods(paymentMethods);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  const handleCreateOrder = async () => {
    await createOrder(selectedMethod as PaymentMethod);
  };

  const displayPaymentMethods = () =>
    paymentMethods.map((paymentMethod, index) => (
      <PaymentOption
        key={index}
        {...paymentMethodConfig[paymentMethod.type]}
        config={JSON.parse(paymentMethod?.config ?? "{}")}
        value={String(selectedMethod) ?? ""}
        handleChange={(method: any) => {
          setSelectedMethod(method);
        }}
      />
    ));

  if (loading)
    return (
      <div>
        <CircularProgress color="success" size="20px" />
      </div>
    );

  return (
    <div className={classes.root}>
      {displayPaymentMethods()}
      <MbmcButton
        variant="SECONDARY"
        size="sm"
        className={classes.paymentButton}
        isLoading={ctxtLoading && networkOperation === "create.order"}
        handleClick={handleCreateOrder}
      >
        Pay now
      </MbmcButton>
    </div>
  );
};
