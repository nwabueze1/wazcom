import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
    height: "100vh",
  },
  timeInput: {
    maxWidth: "1100px",
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));
