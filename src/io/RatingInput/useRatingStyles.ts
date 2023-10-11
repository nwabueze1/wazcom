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
  helperTextDefault: {
    display: "block",
    width: "100%",
    letterSpacing: 0,
    fontSize: theme.typography.fontSize - 1,
    textAlign: "left",
    marginTop: theme.spacing(0.8),
    flexWrap: "wrap",
    columnGap: theme.spacing(1.3),
  },
  helperTextSuccess: {
    color: theme.design.colors.waz_primaryColor100,
  },
  helperTextError: {
    color: theme.design.colors.error,
  },
  label: {
    fontSize: theme.typography.fontSize - 2,
    display: "block",
    marginBottom: theme.spacing(1),
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    textTransform: "uppercase",
  },
}));
