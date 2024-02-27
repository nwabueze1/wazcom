import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import { FormPallette } from "../../type";

export const usePalletteStyles = makeStyles<Theme, FormPallette>(() => ({
  root: (props) => ({
    "& input:checked ~ .custom__checkbox": {
      backgroundColor: props?.colors?.main,
    },
  }),
  label: (props) => ({
    color: props?.typography?.label?.color,
    fontSize: props?.typography?.label?.fontSize,
    fontFamily: props?.typography?.label?.fontFamily,
  }),
  input: (props) => ({
    color: props?.typography?.input?.color,
    fontSize: props?.typography?.input?.fontSize,
    fontFamily: props?.typography?.input?.fontFamily,
  }),
}));
