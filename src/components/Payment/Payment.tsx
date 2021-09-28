import { useEffect, useContext, useState } from "react";
import * as React from "react";
import { ApolloError, useMutation } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
  ONBOARD_SELLER,
  ONBOARD_STATUS,
  STORE_PAYPAL,
} from "./graphql";
import { toast } from "react-toastify";
import { AppStateContext } from "../provider";
import { Content } from "./Content/Content";

export const Payment: React.FC = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const sellerPayPalId = params.get("merchantIdInPayPal");
  const permissionsGranted = params.get("permissionsGranted");
  const userId = useContext(AppStateContext).user?.id;
  const siteId = useContext(AppStateContext).site;

  const classes = useStyles();
  const [onBoardSeller] = useMutation(ONBOARD_SELLER);
  const [onboardStatus] = useMutation(ONBOARD_STATUS);
  const [storeUserPayPal] = useMutation(STORE_PAYPAL);
  const [actionUrl, setActionUrl] = useState("");

  useEffect(() => {
    async function status() {
      if (sellerPayPalId) {
        await onboardStatus({ variables: { sellerPayPalId } }).then(
          ({ data }) => {
            storeUserPayPal({
              variables: {
                site_id: siteId,
                merchant_id: data?.checkSellerStatus?.merchant_client_id,
              },
            })
              .then(() => {
                toast.success("Onboard Complete");
              })
              .catch((error: ApolloError) => {
                error.graphQLErrors.map(({ message }) => {
                  toast.error(message);
                });
              });
          },
        );
      }
      onBoardSeller({ variables: { userId } }).then(({ data }) => {
        setActionUrl(data.onBoardSeller.redirect_url);
      });
    }
    status();
  }, [permissionsGranted]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID as string,

          "data-merchant-id":
            //this would be gotten from the user after onoarding as this implementation is not even supposed to happen here
            "AduSSIF9NE4ZQVA8VNCdfSMYW1MGGsTWr1MeELD3dTS_gXmAI1XGh229OV_18bWioy2VfC2z7_vpXgsB",
        }}
      >
        {/* <PayPalButtons
          // style={{ color: "silver", shape: "pill", label: "pay", height: 40 }}
          createOrder={async () => {
            return await makePayment({ variables: { order_id: "10" } })
              .then(({ data }) => {
                return data?.makePayment?.orderId;
              })
              .catch(() => {
                return "false";
              });
          }}
          onApprove={async (data) => {
            await verifyPayment({ variables: { token: data.orderID } })
              .then(({ data }) => {
                toast.success("Payment Success");
                return data?.verifyPayment?.reference_id;
              })
              .catch((error: ApolloError) => {
                error.graphQLErrors.map(({ message }) => {
                  toast.error(message);
                });
              });
          }}
        /> */}
      </PayPalScriptProvider>
      <Content />
      <Button className={classes.button} style={{ background: "#F94C4C" }}>
        <a href={actionUrl} data-paypal-button="true" className={classes.link}>
          Agree and connect
        </a>
      </Button>
    </Grid>
  );
};
