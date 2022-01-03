import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useDisplayCardStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    width: "233px",
    height: "112px",
    borderRadius: "20px",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    color: theme.design.colors.yellowsea,
    fontWeight: "bold",
  },
  pend: {
    fontSize: "18px",
    marginTop: theme.spacing(2),
  },
  icon: {
    color: theme.design.colors.gray60,
    fontSize: "25px",
  },
}));
