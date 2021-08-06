import { makeStyles } from "@material-ui/core/styles";

import theme from "js/theme";

export const useStyles = makeStyles(() => ({
  root: {},
  top: {
    display: "flex",
    flexDirection: "row",
  },
  topNumber: {
    color: theme.design.colors.darkGrey,
  },
  topText: {
    color: "#",
  },
  largeBox: {
    width: "650px",
    height: "100px",
    marginTop: theme.spacing(1),
    boxShadow: "0px 4px 24px rgba(9, 44, 76, 0.4)",
    marginLeft: theme.spacing(62.5),
    marginBottom: theme.spacing(1),
    borderRadius: "10px",
  },
  colorType: {
    color: theme.design.colors.grey3,
    fontSize: "40px",
  },
  spacediv: {
    width: "1000px",
    height: "50px",
  },
  smallPrimaryDiv: {
    display: "flex",
    marginLeft: theme.spacing(60),
    flexWrap: "wrap",
    width: "700px",
  },
  smallPrimaryModified: {
    height: "100px",
    width: "100px",
    margin: theme.spacing(2.5),
    borderRadius: "10px",
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.24)",
  },
  smallPrimary: {
    height: "100px",
    width: "100px",
    margin: theme.spacing(2.25),
    borderRadius: "10px",
  },
  bigPrimaryText: {
    marginLeft: theme.spacing(63),
    color: theme.design.colors.primaryblue,
    fontWeight: "bold",
  },
  smallPrimaryText: {
    marginLeft: theme.spacing(1),
    color: theme.design.colors.primaryblue,
    fontWeight: "bold",
  },
}));
