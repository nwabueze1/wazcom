import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_PAYMENT_METHODS } from "./graphql";
import { PaymentMethod } from "./types";
import { CircularProgress } from "@mui/material";
import { PaymentOption } from "../../../../components";
import { paymentMethodConfig } from "./helpers";
import { usePaymentStyles } from "./styles";
import { RestaurantContext } from "../../../../contexts";

export const Payment = () => {
    const { clients, cart } = useContext(RestaurantContext);
    const classes = usePaymentStyles();
    const { data, error, loading } = useQuery(GET_PAYMENT_METHODS, {
        client: clients?.NICODEMUS,
        variables: { service_uuid: cart?.restaurant?.uuid },
    });
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>();

    useEffect(() => {
        if (data) {
            const { getPaymentMethod: paymentMethods } = data;
            setPaymentMethods(paymentMethods);
        }

        if (error) {
            console.log(error);
        }
    }, [data, error]);

    const displayPaymentMethods = () =>
        paymentMethods.map((paymentMethod, index) => (
            <PaymentOption
                key={index}
                {...paymentMethodConfig[paymentMethod.type]}
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

    return <div className={classes.root}>{displayPaymentMethods()}</div>;
};
