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
    width: "307px",
    height: "307px",
    marginTop: "4%",
    boxShadow: "0px 4px 24px rgba(9, 44, 76, 0.4)",
    marginLeft: "30%",
    marginBottom: "1%",
    borderRadius: "10px",
  },
  colorType: {
    color: theme.design.colors.grey3,
    fontSize: "40px",
  },
  smallPrimaryDiv: {
    display: "flex",
    marginLeft: "30%",
    flexWrap: "wrap",
    width: "700px",
  },
  smallPrimaryModified: {
    height: "100px",
    width: "100px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.24)",
  },
  smallPrimary: {
    height: "100px",
    width: "100px",
    margin: "10px",
    borderRadius: "10px",
  },
  bigPrimaryText: {
    marginLeft: "30%",
    color: theme.design.colors.primaryblue,
    fontWeight: "bold",
  },
  smallPrimaryText: {
    marginLeft: "25%",
    color: theme.design.colors.primaryblue,
    fontWeight: "bold",
  },
}));
