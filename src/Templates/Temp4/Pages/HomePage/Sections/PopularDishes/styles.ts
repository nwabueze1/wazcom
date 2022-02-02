import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const usePopularDishesStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    padding: theme.spacing(15, 0),
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 28
  },
  viewMore:{
      color: theme.design.colors.darkOrange,
      fontSize: theme.typography.fontSize + 16
  },
  details: {
      fontSize: theme.typography.fontSize + 12
  },
  dishes: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(4),
      padding: theme.spacing(6, 0)
  }
}));
