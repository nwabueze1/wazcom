import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import { FormPallette } from "../../type";

export const usePalletteStyles = makeStyles<Theme, FormPallette>(() => ({
  container: {
    border: (props) => props?.colors?.main,
    background: (props) => props?.colors?.main ?? "",
    opacity: 0.6,
    "&:hover": {
      border: (props) => props?.colors?.hover,
      background: (props) => props?.colors?.hover,
    },
    "&.error": {
      border: (props) => props?.colors?.error,
    },
    "&.active": {
      background: (props) => props?.colors?.main,
      opacity: 1,
    },
  },
  text: (props) => ({
    color: props?.typography?.input?.color,
    fontFamily: props?.typography?.input?.fontFamily,
    fontSize: props?.typography?.input?.fontSize,
  }),
  label: (props) => ({
    color: props?.typography?.label?.color,
    fontFamily: props?.typography?.label?.fontFamily,
    fontSize: props?.typography?.label?.fontSize,
  }),
}));
