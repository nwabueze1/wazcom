import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useInputGroupStyles = makeStyles((theme: Theme) => ({
  root: {},
  inputGroup: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: 1,
    left: 1,
    width: "25%",
    height: "calc(100% - 2px)",
    background: "#CCCFCD",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    padding: theme.spacing(0, 2),
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  textInput: {
    paddingLeft: "25%",
  },
}));
