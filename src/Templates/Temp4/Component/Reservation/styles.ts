import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useReservationStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    background: theme.design.colors.black,
    padding: theme.spacing(30, 0)
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
  },
  reservation: {
      color: theme.design.colors.white,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 3,
      textAlign: "center"
  },
  input: {
    display: "flex",
    justifyContent: "space-between"
  },
  dateInput: {
    border: `1px solid ${theme.design.colors.darkOrange}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2, 3)
  },
  btn: {
    color: theme.design.colors.white,
    background: theme.design.colors.darkOrange,
    padding: theme.spacing(1, 4),
    margin: theme.spacing(5, 0),
    display: "flex",
    justifyContent: "center"
  },
}));
