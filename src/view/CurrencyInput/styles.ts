import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCurrencyInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(5),
  },
  header: {
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(1),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h1.fontSize,
    color: theme.design.colors.waz_primaryBlack,
    margin: 0,
    padding: 0,
  },
  cardTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.waz_primaryBlack,
    textTransform: "capitalize",
    margin: theme.spacing(0, 0, 1.5, 0),
    padding: 0,
  },
  description: {
    margin: 0,
    padding: 0,
    width: "60vw",
  },
  descriptionText: {
    fontSize: theme.typography.h5.fontSize,
    lineSpacing: theme.spacing(22),
  },
  wrapper: {
    width: 187,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  wrapperHorizontal: {
    width: "min(70vw, 400px)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  inputContainer: {
    background: theme.design.background.waz_primaryWhite,
    maxWidth: 187,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    padding: 24,
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  inputs: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,
  },
  input: {
    width: "100%",
    display: "flex",
    padding: "0 10px",
  },
}));
