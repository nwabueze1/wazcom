import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useContactUsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(10),
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
      fontSize: theme.typography.fontSize +21,
      marginBottom: theme.spacing(3),
      textAlign: "center",
      fontWeight: theme.typography.fontWeightBold
  },
  contactDetails: {
      width: "25%",
      textAlign: "center"
  },
  info: {
    textAlign: "center",
    fontSize: theme.typography.fontSize + 2
  },
  icon:{
    fontSize: theme.typography.fontSize + 20,
    padding: theme.spacing(2,0)
  },
  icons: {
      textAlign: "center",
      gap: theme.spacing(5)
  }
}));
