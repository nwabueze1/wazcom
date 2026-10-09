import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import { FormPallette } from "../../type";

export const usePallette = makeStyles<Theme, FormPallette>(() => ({
  rating: (pallette) => ({
    "& > svg": {
      fill: pallette?.colors?.main,
      opacity: 0.4,
      "&.filled": {
        opacity: 1,
        fill: pallette?.colors?.main,
      },
      "&:hover": {
        fill: pallette?.colors?.hover,
      },
    },
  }),
  label: (props) => ({
    fontSize: props?.typography?.label?.fontSize,
    color: props?.typography?.label?.color,
    fontFamily: props?.typography?.label?.fontFamily,
  }),
}));
