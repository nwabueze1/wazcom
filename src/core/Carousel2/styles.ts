import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { TCustomStyle } from "./types";

export const useCarouselStyles = makeStyles<Theme, TCustomStyle>((theme: Theme) => ({
  stepper: {
    backgroundColor: "transparent",
    "& > button": {
      backgroundColor: (props) => props?.colors?.background?.[200],
      padding: theme.spacing(1, 3),
      color: (props) => props?.colors?.background?.[100],
      fontSize: theme.typography.fontSize * 2,

      "&:hover": {
        backgroundColor: (props) => `${props?.colors?.background?.[200]} !important`,
      },
    },
  },
  active: {
    backgroundColor: (props) => `${props?.colors?.background?.[200]} !important`,
  },
  dot: {
    backgroundColor: theme.design.colors.waz_lightOrange,
    opactity: 0.1,
  },
}));
