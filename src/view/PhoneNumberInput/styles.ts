import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const usePhoneNumberInputStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
  },
  container: {
    width: 187,
  },
}));
