import React, { useMemo, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Cookies from "universal-cookie";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout, EmptyCart, Loader, OrderDetails } from "./components";
import { RestaurantContext, RestaurantContextProps } from "../../contexts";
import { MbmcBlock14Props } from "./types";
import { createApolloClient } from "../../../../helpers/graphQL";
import { GET_CART_BY_UUID } from "./graphql";
import { MbmcButton } from "../../components";
import { useUpdateOrder } from "./hooks";
import { CoreCartFields } from "templates/mbmc/models";

export const MbmcBlock14: React.FC<MbmcBlock14Props> = ({
    gatewayUrl,
    site_uuid,
    setContextProps,
}) => {
    const classes = useMbmcBlock14Styles();
    const [contextData, setContextData] = useState<Omit<RestaurantContextProps, "setContext">>({});
    const [loading, setLoading] = useState(true);
    const [isDomLoaded, setIsDomLoaded] = useState(false);
    const cookies = new Cookies();
    const cartCookie = useMemo(() => cookies.get("cart"), []);
    const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);
    const updateOrder = useUpdateOrder();
    const [displayCheckout, setDisplayCheckout] = useState(false);

    const [getCart, { data, error }] = useLazyQuery(GET_CART_BY_UUID, {
        client,
    });

    useEffect(() => {
        setIsDomLoaded(true);

        if (!cartCookie || !cartCookie[site_uuid]) {
            setLoading(false);
            return;
        }

        getCart({ variables: { uuid: cartCookie[site_uuid] } });
    }, []);

    useEffect(() => {
        if (isDomLoaded) {
            const queryParams = new URLSearchParams(window.location.search);
            setDisplayCheckout(Boolean(queryParams.get("partner") && queryParams.get("reference")));
        }
    }, [isDomLoaded]);

    useEffect(() => {
        if (data) {
            const {
                getCart: { restaurant, ...rest },
            } = data;
            const cart = {
                ...rest,
                restaurant: { ...restaurant, site_uuid: restaurant?.site?.uuid },
            };
            const contextData: Omit<RestaurantContextProps, "setContext"> = {
                cart: JSON.parse(JSON.stringify(cart)),
                client,
            };
            handleOrderConfirmation(contextData);
        }

        if (error) setLoading(false);
    }, [data, error]);

    const handleOrderConfirmation = async (
        contextData: Omit<RestaurantContextProps, "setContext">,
    ) => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get("partner") && queryParams.get("reference")) {
            const order = await updateOrder(
                client,
                contextData?.cart?.restaurant?.site_uuid as string,
            );
            contextData = {
                ...contextData,
                cart: { ...(contextData?.cart as CoreCartFields), order },
            };
        }

        setContextData(contextData);
        setLoading(false);
    };

    const updateContext = (variables: Omit<RestaurantContextProps, "setContext">) => {
        setContextData({ ...contextData, ...variables });
    };

    if (loading) return <Loader />;

    const isCartEmpty =
        contextData?.cart?.cartItems?.length === 0 ||
        !cartCookie ||
        (cartCookie && !cartCookie[site_uuid]);

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
                                <CartItems setContextProps={setContextProps} />
                                <span className={classes.block14Divider} />
                                {contextData?.cart?.order ? (
                                    <OrderDetails
                                        display={displayCheckout}
                                        setDisplay={setDisplayCheckout}
                                    />
                                ) : (
                                    <Checkout
                                        display={displayCheckout}
                                        setDisplay={setDisplayCheckout}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
                {contextData?.cart?.cartItems && contextData?.cart?.cartItems?.length > 0 && (
                    <div className={classes.block14Action}>
                        <MbmcButton
                            variant="SECONDARY"
                            onClick={() => {
                                setDisplayCheckout(true);
                            }}
                        >
                            Proceed to summary
                        </MbmcButton>
                    </div>
                )}
            </div>
        </RestaurantContext.Provider>
    );
};
