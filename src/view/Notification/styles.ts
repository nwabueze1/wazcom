import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useNotificationStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    padding: `${theme.spacing(2)}`,
    margin: 0,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleWrapper: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightBold,
  },
  tooltipTitle: {
    color: theme.design.colors.waz_primaryBlack,
    marginBottom: theme.spacing(1),
  },
  tooltipContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    maxWidth: 700,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));
