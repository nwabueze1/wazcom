import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

export const useOptionsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    fontFamily: theme.typography.fontFamily,
    "& .MuiPaper-elevation1": {
      boxShadow: "none !important",
    },
    "& .MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 0, 11),
    }
  },
}));
