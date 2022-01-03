import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useGqlSelectStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  label: {
    marginBottom: 9,
    fontSize: "1rem",
    fontWeight: 700,
  },
  loader: {
    marginBottom: theme.spacing(2),
    color: theme.design.colors.red70,
  },
}));
