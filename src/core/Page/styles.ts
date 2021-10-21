import { BaseTheme } from "theme";
import { makeStyles } from "@mui/styles";

export const usePageStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: theme.design.colors.gray80,
      fontSize: theme.typography.fontSize * 1.125,
      fontWeight: "bold",
    },
    "& ul": {
      fontSize: "16px",
    },
  },
  description: {
    fontFamily: "Nunito",
    color: theme.design.colors.gray4,
    fontSize: theme.typography.fontSize * 1,
    padding: theme.spacing(1, 0),
  },
  pageNumber: {
    fontFamily: "Nunito",
    color: theme.design.colors.gray80,
    fontSize: theme.typography.fontSize * 1,
    fontWeight: "bold",
  },
}));
