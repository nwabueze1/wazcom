import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useInputGroupStyles = makeStyles((theme: Theme) => ({
  root: {},
  inputGroup: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: 2,
    left: 2,
    width: "30%",
    height: "calc(100% - 4px)",
    background: theme.design.colors.mercury,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: "30%",
  },
}));
