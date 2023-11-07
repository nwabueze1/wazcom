import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

export const useScheduleStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    flexWrap: "wrap",
  },
  multiSelect: {
    width: 145,
  },
  to: {
    display: "flex",
  },
  time: {
    width: 140,
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
  },
}));
