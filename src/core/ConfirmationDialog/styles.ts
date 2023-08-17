import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useConfirmationDialogStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRadius: 4,
    padding: theme.spacing(3),
    background: theme.design.colors.waz_white,
    zIndex: 5,
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    position: "relative",
  },
  title: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.waz_primaryBlack,
    fontFamily: "inherit",
  },
  description: {
    color: theme.design.colors.waz_grey1,
    fontSize: theme.typography.fontSize + 2,
    fontFamily: "inherit",
  },
  icon: {
    fontSize: theme.typography.fontSize + 6,
    color: theme.design.colors.grey100,
    cursor: "pointer",
  },
  buttons: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
    fontFamily: "inherit",
  },
  button: {
    width: 86,
    height: 35,
    fontSize: theme.typography.fontSize + 2,
  },
}));
