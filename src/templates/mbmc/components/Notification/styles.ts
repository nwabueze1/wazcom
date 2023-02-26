import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useNotificationStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    border: 1,
  },
}));
