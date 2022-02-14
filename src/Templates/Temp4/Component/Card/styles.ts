import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useCardStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "357px",
    fontFamily: theme.include.styles.template4.font,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "335px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageContainer: {
    height: "475px",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.spacing(2, 2, 0, 0),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "332px",
    },
  },
  mealName: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 20,
  },
  price: {
    fontSize: theme.typography.fontSize + 12,
    margin: theme.spacing(1, 0),
  },
  details: {
      position: "absolute",
      bottom: "10px",
      left: "20px",
      color: theme.design.colors.white,
  },
  dishOptions: {
      position: "absolute",
      left: "50%",
      top: "50%",
      zIndex: 3,
      transform: "translate(-50%,-50%)",
      color: theme.design.colors.white,
      fontSize: theme.typography.fontSize + 12,
      transition: "opacity 0.5s ease-in",
  },
  addDish: {
      display: "flex",
      cursor: "pointer",
      marginBottom: theme.spacing(2),
      "&:hover": {
          color: theme.design.colors.darkOrange
      }
  },
  arrowIcon: {
      alignSelf: "center",
      fontSize: "35px"
  },
  overlay: {
    borderRadius: theme.spacing(2, 2, 0, 0),
    background: "rgba(17, 17, 17, 0.6)",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    zIndex: 1,
    transition: "opacity 0.5s ease-in",
  },


}));
