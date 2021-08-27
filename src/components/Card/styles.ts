import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

export const useCardStyles = makeStyles(() => ({
  root: {
    width: "384px",
    pading: theme.spacing(1, 1),
    textAlign: "center",
    borderRadius: "25px",
  },
  regtext: {
    color: theme.design.colors.sunRed,
    fontWeight: "bold",
    fontSize: "24px",
    margin: theme.spacing(2, 0),
  },
  text: {
    padding: theme.spacing(0, 2),
    textAlign: "left",
  },
}));
