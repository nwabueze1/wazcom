import { makeStyles } from "@mui/styles";

export const useInputGroupStyles = makeStyles(() => ({
  root: {},
  inputGroup: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: 2,
    left: 2,
    width: "25%",
    height: "calc(100% - 4px)",
    background: "#CCCFCD",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingLeft: "25%",
  },
}));
