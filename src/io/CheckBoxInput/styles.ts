import { Theme } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

export const useCheckboxInputStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));
