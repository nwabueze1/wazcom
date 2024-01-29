import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useToggleInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  toggleContainer: {
    display: "flex",
    gap: 40,
  },
}));
