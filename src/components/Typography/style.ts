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
    color: "",
  },
  ralewaydiv: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginRight: "30%",
  },
  raleway: {
    color: theme.design.colors.secondaryblue,
  },
  headerdiv: {
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  table: {
    width: "500px",
  },
  notheading: {
    color: theme.design.colors.grey3,
    fontSize: "24px",
  },
  heading1: {
    color: theme.design.colors.secondaryblue,
    fontSize: "40px",
  },
  heading2: {
    color: theme.design.colors.secondaryblue,
    fontSize: "32px",
  },
  heading3: {
    color: theme.design.colors.secondaryblue,
    fontSize: "24px",
  },
  heading4: {
    color: theme.design.colors.secondaryblue,
    fontSize: "20px",
  },
  cell: {
    paddingRight: "2px",
  },
  spaceDiv: {
    width: "100%",
    height: "200px",
  },
  row: {
    // width: "500px",
    display: "flex",
    justifyContent: "space-around",
  },
  divimg: {
    marginRight: "20%",
  },
}));
