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
  },
  line: {
    border: `0.2px solid ${theme.design.colors.grey}`
  },
  tabs: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    display: "flex",
    alignContent: "center",
    gap: theme.spacing(12),
    paddingTop: theme.spacing(10),
    fontSize: theme.typography.fontSize + 28,
    cursor: "pointer",
  },
  dishes: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
  active: {
    borderBottom: `2px solid ${theme.design.colors.darkOrange}`
  }
}));
