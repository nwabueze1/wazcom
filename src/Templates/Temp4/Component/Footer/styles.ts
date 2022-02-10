import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useFooterStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    borderTop: `1px solid ${theme.design.colors.fauxGrey}`,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
  },
  copyRight: {
    fontSize: theme.typography.fontSize + 12,
    textAlign: "center",
    padding: theme.spacing(3, 0),
  },
}));
