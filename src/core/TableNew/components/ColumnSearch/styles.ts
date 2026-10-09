import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useColumnSearchStyles = makeStyles((theme: Theme) => ({
  searchByColumnContainer: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "end",
    flex: 1,
  },
  searchColumnSelect: {
    width: "45%",
  },
  searchColumnText: {
    flex: 1,
    background: "white",
  },
  baseInput: {
    width: "auto",
  },
  searchBtn: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    width: "auto",
    height: 38,
    padding: theme.spacing(0, 3),
  },
}));
