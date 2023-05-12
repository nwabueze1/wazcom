import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useColorInputStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "fit-content",
  },
  colorInput: {
    width: "15px",
    height: "17px",
    cursor: "pointer",
    borderRadius: "2px",
  },
  colorPicker: {
    marginTop: theme.spacing(0.5),
  },
}));
