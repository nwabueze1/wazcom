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
    integratedService,
    site_uuid,
}) => {
    const classes = useMbmcBlock14Styles();
    const [contextData, setContextData] = useState<Omit<RestaurantContextProps, "setContext">>({});
    const [loading, setLoading] = useState(true);
    const cookies = new Cookies();
    const cartCookie = cookies.get("cart");
    const client = useMemo(
        () => createApolloClient(services ? services[integratedService] : ""),
        [],
    );

    const [getCart, { data, error }] = useLazyQuery(GET_CART_BY_UUID, { client });

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
            setContextData({ cart, client });
            setLoading(false);
        }

        if (error) setLoading(false);
    }, [data, error]);

    if (loading) return <Loader />;

    if (
        !cartCookie ||
        (cartCookie && !cartCookie[site_uuid]) ||
        contextData?.cart?.cartItems?.length === 0
    )
        return <EmptyCart />;

    return (
        <RestaurantContext.Provider value={{ ...contextData }}>
            <div className={classes.root}>
                <div className={classes.block14Container}>
                    <CartItems />
                    <span className={classes.block14Divider} />
                    <Checkout />
                </div>
            </div>
        </RestaurantContext.Provider>
    );
};
