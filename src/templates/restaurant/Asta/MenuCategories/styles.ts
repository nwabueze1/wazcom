import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useMenuCategoryStyles = makeStyles<Theme>((theme: Theme) => ({
  categoryParent: {
    width: "96%",
    position: "sticky",
    margin: theme.spacing(0, "auto"),
    top: 0,
    zIndex: 5,
    border: `1px solid ${theme.design.colors.waz_grey300}`,
    background: theme.design.colors.waz_white,
    padding: theme.spacing(1, 0),
  },
  categoryContainer: {
    display: "flex",
    width: "95%",
    margin: theme.spacing(0, 2),
    gap: theme.spacing(1),
    alignItems: "center",
    background: theme.design.colors.waz_white,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  categoryArrow: {
    position: "relative",
    top: 2,
  },
  menuCategories: {
    display: "flex",
    alignItems: "center",
    overflowX: "scroll",
    gap: theme.spacing(4),
    position: "relative",
    width: "100%",
    margin: theme.spacing(0, 1),
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  restaurantCategory: {
    padding: theme.spacing(1, 0, 1.5, 0),
    whiteSpace: "nowrap",
  },
  restaurantMenuCategory: {
    flexShrink: 0,
  },
  active: {
    backgroundColor: theme.design.colors.waz_primaryColor100,
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(4),
  },
  textActive: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    textDecoration: "none",
  },
  categoryLink: {
    color: theme.design.colors.waz_grey600,
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    textDecoration: "none",
  },
}));
