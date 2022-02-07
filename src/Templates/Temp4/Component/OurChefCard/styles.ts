import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useOurChefCardStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  imgContainer: {
    height: "475px",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.spacing(2, 2, 0, 0),
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "357px"
  },
  chefName: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 21,
    color: theme.design.colors.white,
    paddingTop: theme.spacing(3)
  },
  chefDetails: {
    fontSize: theme.typography.fontSize + 12,
    color: theme.design.colors.white
  }
}));
