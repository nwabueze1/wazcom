import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
    height: "100vh",
  },
  wrapper: { paddingBottom: theme.spacing(2) },
  cardTitle: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  inputs: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,
    maxWidth: "1000px",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(3),
    },
  },
  input: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
}));
