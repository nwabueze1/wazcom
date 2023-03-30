import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useProgressStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  progressWrapper: {
    maxWidth: "700px",
    width: "100%",
  },
}));
