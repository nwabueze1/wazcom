import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTabStyles = makeStyles((theme: Theme) => ({
  root: {},
  tabs: {
    width: "500px",
    color: theme.design.colors.red,
    borderRadius: 9,
  },
}));
