import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useMenuStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  line: {
    borderBottom: `0.2px solid ${theme.design.colors.fauxGrey}`,
  },
  tab: {
    fontSize: theme.typography.fontSize + 28,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  tabs: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    display: "flex",
    alignContent: "center",
    gap: theme.spacing(12),
    paddingTop: theme.spacing(10),
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(7),
      paddingTop: theme.spacing(6),
    },
  },
  dishes: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
  active: {
    borderBottom: `2px solid ${theme.design.colors.darkOrange}`,
  },
}));
