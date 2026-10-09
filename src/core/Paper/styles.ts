import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePaperStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.background.waz_primaryWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    padding: theme.spacing(2.5, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
  },
}));
