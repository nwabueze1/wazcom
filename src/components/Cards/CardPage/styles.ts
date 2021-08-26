import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme";

export const useStyles = makeStyles(() => ({
  root: {
    margin: theme.spacing(5, 5),
  },
  header: {
    margin: theme.spacing(3, 1),
    color: theme.design.colors.grey,
    "& span": {
      color: theme.design.colors.red,
    },
  },
  topcard: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(3, 0),
  },
  tittle: {
    fontSize: 24,
    color: theme.design.colors.red70,
    margin: theme.spacing(3, 0),
  },
  midcard: {
    margin: theme.spacing(5, 0),
  },
}));
