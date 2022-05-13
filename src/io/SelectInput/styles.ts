import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    fontSize: "16px",
    color: theme.design.colors.greyColor400,
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  required: {
    color: "red",
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  select: {
    width: "100%",
  },
}));
