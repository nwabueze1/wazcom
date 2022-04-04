import { Theme } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

export const useToggleStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  addon: {
    width: "30%",
    background: "#EFEDED",
    border: "1px solid #BEBEBE",
  },
  inputControl: {
    display: "flex",
  },
  helperText: {
    color: theme.design.colors.black,
  },
  toggle: {
    color: theme.design.colors.successColor,
    marginTop: theme.spacing(1),
    "& 	.Mui-checked": {
      color: theme.design.colors.white,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.design.colors.greene,
        opacity: 1,
        border: 0,
      },
    },
  },
}));
