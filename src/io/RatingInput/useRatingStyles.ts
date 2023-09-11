import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useRatingStyles = makeStyles((theme: Theme) => ({
  ratingContainer: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      gap: theme.spacing(1),
    },
    flexWrap: "wrap",
  },
  containedFilled: {
    fill: theme.design.colors.waz_primary700,
    fontSize: theme.typography.fontSize * 2,
    cursor: "pointer",
    "&.filled": {
      fill: theme.design.colors.waz_primary100,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
}));
