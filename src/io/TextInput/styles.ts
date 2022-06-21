import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    position: "relative",
  },
  label: {
    display: "flex",
    alignItems: "center",
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
}));
