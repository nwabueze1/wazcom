import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTabsStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    margin: 0,
    height: "100vh",
    background: theme.design.colors.waz_white,
  },
}));
