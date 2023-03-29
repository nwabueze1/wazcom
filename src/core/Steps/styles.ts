import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useStepsStyles = makeStyles((theme: BaseTheme) => ({
  root: { position: "relative", width: "100%" },
  steps: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: 400,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
    },
  },
  stepItem: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      top: 20,
      left: "-50%",
      zIndex: 2,
    },
    "&[data-active=false] .step__label": {
      opacity: 0.6,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      top: 20,
      left: "50%",
      zIndex: 2,
    },
    "&[data-active=true]::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      top: theme.spacing(2),
      left: "-50%",
      zIndex: 3,
      borderBottom: `1px solid theme.design.colors.waz_primary500`,
    },
    "&:first-child::before": {
      content: "none",
    },
    "&:last-child::after": {
      content: "none",
    },
  },
  stepContent: {
    position: "relative",
    fontSize: theme.typography.fontSize - 1,
    width: 32,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
    borderRadius: 4,
    backgroundColor: theme.design.colors.waz_primary900,
    marginBottom: theme.spacing(0.5),
    "&[data-active=true]": {
      backgroundColor: theme.design.colors.waz_primary100,
      color: theme.design.colors.waz_white,
    },
  },
  stepLabel: {
    position: "relative",
    display: "block",
    fontSize: theme.typography.fontSize - 1,
    color: theme.design.colors.waz_grey,
  },
  stepIcon: {
    fontSize: theme.typography.fontSize + 6,
    margin: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
