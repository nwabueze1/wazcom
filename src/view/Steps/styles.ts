import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStepsStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  innerContainer: {
    flexDirection: "column",
    gap: theme.spacing(8),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));
