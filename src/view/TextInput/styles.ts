import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
  },
  wrapper: { paddingBottom: theme.spacing(2) },
  cardTitle: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  inputs: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6, 7),
    margin: 0,
    padding: 0,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: theme.spacing(3),
      alignItems: "start",
    },
  },
  input: {
    width: "100%",
    maxWidth: 180,
    padding: 0,
    margin: 0,
  },
}));
