import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useRadioButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
  },
  wrapper: {},
  inputs: {
    width: "100%",
    maxWidth: "220px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(3),
    },
  },
}));
