import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTextStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    position: "relative",
  },
  required: {
    color: theme.design.colors.dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
}));
