import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useQuestionInputStyles = makeStyles((theme: Theme) => ({
  inputContainer: {
    fontFamily: theme.typography.fontFamily,
    height: "auto",
  },
  addressFieldSet: {
    fontSize: theme.typography.fontSize,
  },
  errorBorder: {
    borderColor: theme.design?.colors?.error,
  },
  fieldSet: {
    margin: 0,
    borderRadius: 4,
    display: "grid",
    gap: theme.spacing(1),
    "&.error": {
      borderColor: theme.design.colors.error,
    },
  },
  legend: {
    color: theme.design.colors.waz_grey,
    marginTop: theme.spacing(0.5),
    fontSize: theme.typography.fontSize,
    textTransform: "uppercase",
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  ratingLabel: {
    margin: theme.spacing(1.5, 0),
  },
}));
