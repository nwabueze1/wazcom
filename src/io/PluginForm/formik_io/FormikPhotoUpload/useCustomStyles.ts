import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormPallette } from "../../type";

export const useCustomStyles = makeStyles<Theme, FormPallette>(() => ({
  container: (props) => ({
    borderColor: props?.colors?.main,
    "&:hover": {
      borderColor: props?.colors?.hover,
    },
    "&.error": {
      borderColor: props?.colors?.error,
    },
  }),
  selectFileButton: (props) => ({
    borderColor: props?.colors?.main,
    color: props?.colors?.main,
    "&:hover": {
      color: props?.colors?.main,
      borderColor: props?.colors?.hover,
    },
  }),
  helperText: (props) => ({
    fontFamily: props?.typography?.input?.fontFamily,
    fontSize: 10,
    color: props?.colors?.error,
  }),
  label: (props) => ({
    fontFamily: props?.typography?.label?.color,
    color: props?.typography?.label?.color,
    fontSize: props?.typography?.label?.fontSize,
  }),
  changeFileButton: (props) => ({
    background: props?.colors?.main,
    fontFamily: props?.typography?.input?.fontFamily,
    "&:hover": {
      background: props?.colors?.main,
    },
  }),
}));
