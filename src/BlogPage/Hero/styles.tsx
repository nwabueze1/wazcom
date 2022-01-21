import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useHeroStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  HeroImage: {
    display: "flex",
    marginTop: theme.spacing(19) + 5,
    margin: "auto",
    width: "47%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "391px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "178px",
    },
  },
}));
