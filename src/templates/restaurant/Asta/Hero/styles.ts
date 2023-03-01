import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {},
  container: {
    height: "400px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  restaurantCoverImg: {
    position: "absolute",
    objectFit: "cover",
    objectPosition: "center",
    height: "100%",
    width: "100%",
  },
}));
