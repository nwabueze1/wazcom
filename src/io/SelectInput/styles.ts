import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    padding: "4px 13px",
    fontSize: "16px",
    color: theme.design.colors.grey,
  },
  error: {
    color: "#EA3C53",
    margin: "0.8vh 0 0 0",
    fontSize: "16px",
  },
}));
