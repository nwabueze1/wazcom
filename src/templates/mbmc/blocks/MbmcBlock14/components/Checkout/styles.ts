import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CheckoutProps } from "./types";

export const useCheckoutStyles = makeStyles<Theme, Pick<CheckoutProps, "display">>(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "44%",
      margin: theme.spacing(2, 0),

      [theme.breakpoints.down("md")]: {
        transition: "all 0.5s ease-in",
        background: theme.design.colors.waz_grey50,
        boxSizing: "border-box",
        width: "100vw",
        position: "fixed",
        top: 0,
        height: "100vh",
        overflowY: "scroll",
        left: ({ display }) => (display ? 0 : "100vw"),
        zIndex: 10,
        padding: theme.spacing(4, 1.5, 1.5, 1.5),
        margin: 0,
      },
    },
    checkoutTitle: {
      alignItems: "center",
      fontFamily: theme.design.font.lostaMasta,
      fontSize: theme.typography.fontSize * 2,
      fontWeight: theme.typography.fontWeightMedium,
      gap: theme.spacing(1.5),
      display: "none",

      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
  }),
);
