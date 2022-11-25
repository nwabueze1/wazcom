import React, { useMemo, useState, useEffect } from "react";
import { ApolloClient, NormalizedCacheObject, useLazyQuery } from "@apollo/client";
import Cookies from "universal-cookie";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout, EmptyCart, Loader } from "./components";
import { RestaurantContext, RestaurantContextProps } from "../../contexts";
import { MbmcBlock14Props } from "./types";
import { createApolloClient } from "../../../../helpers/graphQL";
import { GET_CART_BY_UUID } from "./graphql";

export const MbmcBlock14: React.FC<MbmcBlock14Props> = ({
    services,
    integratedServices,
    site_uuid,
}) => {
    const classes = useMbmcBlock14Styles();
    const [contextData, setContextData] = useState<Omit<RestaurantContextProps, "setContext">>({});
    const [loading, setLoading] = useState(true);
    const cookies = new Cookies();
    const cartCookie = cookies.get("cart");
    const clients = useMemo(() => {
        const clients: { [key: string]: ApolloClient<NormalizedCacheObject> } = {};
        integratedServices.forEach((service) => {
            clients[service] = createApolloClient(services ? services[service] : "");
        });
        return clients;
    }, []);

    const [getCart, { data, error }] = useLazyQuery(GET_CART_BY_UUID, {
        client: clients?.AMBROSIA,
    });

    useEffect(() => {
        if (!cartCookie || !cartCookie[site_uuid]) {
            setLoading(false);
            return;
        }

        getCart({ variables: { uuid: cartCookie[site_uuid] } });
    }, []);

    useEffect(() => {
        if (data) {
            const { cart } = data;
            setContextData({ cart: JSON.parse(JSON.stringify(cart)), clients });
            setLoading(false);
        }

        if (error) setLoading(false);
    }, [data, error]);

    const updateContext = (variables: Omit<RestaurantContextProps, "setContext">) => {
        console.log(variables);
        setContextData({ ...contextData, ...variables });
    };

    if (loading) return <Loader />;

    const isCartEmpty =
        !cartCookie ||
        (cartCookie && !cartCookie[site_uuid]) ||
        contextData?.cart?.cartItems?.length === 0;

    return (
        <RestaurantContext.Provider value={{ ...contextData, setContext: updateContext }}>
            <div className={classes.root}>
                <div className={classes.block14Container}>
                    <p className={classes.block14Title}>
                        Items(
                        {contextData?.cart?.cartItems ? contextData?.cart?.cartItems?.length : 0})
                    </p>
                    <div className={classes.block14CartContent}>
                        {isCartEmpty ? (
                            <EmptyCart />
                        ) : (
                            <>
                                <CartItems />
                                <span className={classes.block14Divider} />
                                <Checkout />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </RestaurantContext.Provider>
    );
};
