import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
export const usePhoneNumberInputStyle = makeStyles((theme: Theme) => ({
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
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 1,
  },
  inputBoxContainer: {
    marginRight: theme.spacing(0.5),
    width: "100%",
  },
}));
