import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useCurrencyInputStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    color: theme.design.colors.waz_dangerColor300,
  },
  input: {
    width: "100%",
    padding: theme.spacing(2, 2),
    borderRadius: "4px",
    border: `1px solid ${theme.design.colors.waz_greenishGrey}`,
    "&::placeholder": {
      color: theme.design.colors.grey300,
      fontSize: theme.typography.fontSize + 2,
    },
    "&:focus": {
      border: `1px solid ${theme.design.colors.waz_primaryColor100}`,
      outline: "none",
    },
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
}));
