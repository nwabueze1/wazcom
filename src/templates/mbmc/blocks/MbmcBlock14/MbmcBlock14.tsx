import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useMbmcBlock14Styles } from "./styles";
import { CartItems, Checkout, EmptyCart, Loader, OrderDetails } from "./components";
import { MbmcBlock14Props } from "./types";
import { MbmcButton } from "../../components";
import { useUpdateOrder } from "./hooks";
import { TAppState } from "../../../types";

export const MbmcBlock14: React.FC<MbmcBlock14Props> = ({ site_uuid }) => {
  const classes = useMbmcBlock14Styles();
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const cookies = new Cookies();
  const cartCookie = useMemo(() => cookies.get("cart"), []);

  const updateOrder = useUpdateOrder();
  const [displayCheckout, setDisplayCheckout] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);

    if (!cartCookie || !cartCookie[site_uuid]) {
      setLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (isDomLoaded) {
      const queryParams = new URLSearchParams(window.location.search);
      setDisplayCheckout(Boolean(queryParams.get("partner") && queryParams.get("reference")));
    }
  }, [isDomLoaded]);

  useEffect(() => {
    handleOrderConfirmation();
  }, []);

  const handleOrderConfirmation = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("partner") && queryParams.get("reference") && cartCookie[site_uuid]) {
      const order = await updateOrder(restaurant?.cart?.restaurant?.site?.uuid as string);
      dispatch({ type: "UPDATE_ORDER", payload: order });
    }

    setLoading(false);
  };

  if (loading) return <Loader />;

  const isCartEmpty =
    restaurant?.cart?.cartItems?.length === 0 ||
    !cartCookie ||
    (cartCookie && !cartCookie[site_uuid]);

  return (
    <div className={classes.root}>
      <div className={classes.block14Container}>
        <p className={classes.block14Title}>
          Items(
          {restaurant?.cart?.cartItems ? restaurant?.cart?.cartItems?.length : 0})
        </p>
        <div className={classes.block14CartContent}>
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
            <>
              <CartItems />
              <span className={classes.block14Divider} />
              {restaurant?.cart?.order ? (
                <OrderDetails display={displayCheckout} setDisplay={setDisplayCheckout} />
              ) : (
                <Checkout display={displayCheckout} setDisplay={setDisplayCheckout} />
              )}
            </>
          )}
        </div>
      </div>
      {restaurant?.cart?.cartItems && restaurant?.cart?.cartItems?.length > 0 && (
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
  );
};
