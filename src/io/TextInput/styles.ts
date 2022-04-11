import { makeStyles } from "@mui/styles";

export const useTextStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    position: "relative",
  },
  textInput: {
    border: "0.3px solid #ADADAD",
    borderRadius: 6,
  },
}));
