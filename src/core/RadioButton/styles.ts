import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useRadioButtonStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    color: theme.design.colors.sunRed,
  },
}));
