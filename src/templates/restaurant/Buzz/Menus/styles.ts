import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useMenusStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "80%",
  },
  container: {
    width: "90%",
    margin: theme.spacing(0, "auto"),
    display: "flex",
    zIndex: 10,
    gap: theme.spacing(3),
  },
  menuContainer: {
    width: "70%",
    background: theme.design.colors.waz_white,
    minHeight: "60vh",
    borderRadius: "8px",
  },
  cartContainer: {
    width: "30%",
    minHeight: "60vh",
    height: "689px",
    borderRadius: "8px",
    boxShadow: "0px 2px 18px rgba(151, 151, 151, 0.16)",
    background: theme.design.colors.waz_white,
  },
  restaurantMenuItem: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  restaurantMenuItemContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  restaurantMenuItemCategory: {
    fontSize: theme.typography.fontSize + 8,
    color: theme.design.colors.primaryBlack,
    fontWeight: 600,
  },
  restaurantMenuItems: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 2, 3, 2),
  },
  restaurantEmpty: {
    display: "flex",
    height: "67vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 0 0",
    background: theme.design.colors.white,
    width: "100%",

    "& p": {
      width: "70%",
      fontSize: "16px",
      margin: "20px 0 0 0",
      color: "rgba(68, 68, 68, 0.5)",
      textAlign: "center",
      lineHeight: "43.65px",
    },
  },
  emptyRestaurant: {
    width: "124px",
  },
}));
