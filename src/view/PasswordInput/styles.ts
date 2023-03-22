import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePasswordInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(5),
  },
  wrapper: { paddingBottom: theme.spacing(2), },
  inputs: {
    width: "100%",
    maxWidth: '220px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  },
  input: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0
  },
}));
