import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useColorInputStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "fit-content",
    position: "relative",
  },
  colorInput: {
    width: "15px",
    height: "17px",
    cursor: "pointer",
    borderRadius: "2px",
    border: `1px solid ${theme.design.colors.waz_primary700}`,
  },
  colorPicker: {
    marginTop: theme.spacing(0.5),
    position: "absolute",
    right: 0,
    zIndex: 10,
    fontFamily: `${theme.design.font.openSans} !important`,
  },
}));
