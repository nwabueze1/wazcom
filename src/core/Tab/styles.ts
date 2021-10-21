import { makeStyles, Theme } from "@mui/material/styles";

export const useTabStyles = makeStyles((theme: Theme) => ({
  root: {},
  tabs: {
    width: "500px",
    color: theme.design.colors.red,
    borderRadius: 9,
  },
}));
