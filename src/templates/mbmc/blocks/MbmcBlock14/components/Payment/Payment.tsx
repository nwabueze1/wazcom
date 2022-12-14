import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_PAYMENT_METHODS } from "./graphql";
import { PaymentMethod } from "./types";
import { CircularProgress } from "@mui/material";
import { PaymentOption, MbmcButton } from "../../../../components";
import { paymentMethodConfig } from "./helpers";
import { usePaymentStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";
import { useCreateOrder } from "./hooks";

export const Payment = () => {
    const { clients, cart, loading: ctxtLoading, networkOperation } = useContext(RestaurantContext);
    const classes = usePaymentStyles();
    const { data, error, loading } = useQuery(GET_PAYMENT_METHODS, {
        client: clients?.NICODEMUS,
        variables: { service_uuid: cart?.restaurant?.uuid },
    });
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>();
    const createOrder = useCreateOrder();

    useEffect(() => {
        if (data) {
            const { getPaymentMethods: paymentMethods } = data;
            console.log(paymentMethods);
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
                loading={ctxtLoading && networkOperation === "create.order"}
                handleClick={handleCreateOrder}
            >
                Pay now
            </MbmcButton>
        </div>
    );
};
