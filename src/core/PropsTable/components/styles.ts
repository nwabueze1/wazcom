import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
export const usePropButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "white",
    padding: theme.spacing(0.5, 3),
    border: "1px solid #CEE3D4",

    textTransform: "capitalize",
    display: "inline-block",
    marginRight: 5,
    hover: {
      border: 2,
    },
  },
  innerContent: {
    display: "flex",
    alignItems: "center",
    fontSize: 10,
    color: "#343E37",
    // margin: theme.spacing(0, 2),
  },
}));
