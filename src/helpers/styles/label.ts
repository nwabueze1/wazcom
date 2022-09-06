import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useLabelStyles = makeStyles((theme: Theme) => ({
  labelz: {
      color: "blue",
      marginBottom: theme.spacing(4),
    },
}));
