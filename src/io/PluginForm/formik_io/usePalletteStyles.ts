import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { FormPallette } from "../type";

export const usePalletteStyles = makeStyles<Theme, FormPallette>((theme) => ({
  baseInput: {
    borderColor: (props) => props?.colors?.main,
    "&:hover": {
      borderColor: (props) => props?.colors?.hover,
    },
    "&.error": {
      borderColor: (props) => props?.colors?.error,
    },
  },
  field: (props) => ({
    fontFamily: props?.typography?.input?.fontFamily,
    fontSize: props?.typography?.input?.fontFamily,
    color: props?.typography?.input?.color,
  }),
  label: (props) => ({
    fontFamily: props?.typography?.label?.fontFamily,
    fontSize: props?.typography?.label?.fontFamily,
    color: props?.typography?.label?.color,
  }),
}));
