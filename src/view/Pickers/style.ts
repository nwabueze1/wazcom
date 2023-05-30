import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const PickersStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(0, 0, 1, 0),
  },
}));
