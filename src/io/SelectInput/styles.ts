import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    fontSize: "16px",
    color: theme.design.colors.grey,
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
    color: theme.design.colors.black,
  },
  select: {
    width: "100%",
    padding: theme.spacing(0.5, 2),
  },
  feedback: {
    color: "#EA3C53",
    marginTop: theme.spacing(2),
  },
}));
