import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCheckBoxInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
  },
  row: {
    display: "flex",
    gap: theme.spacing(1.2),
  },
}));
