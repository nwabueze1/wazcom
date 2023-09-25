import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useTextAreaStyles = makeStyles((theme: Theme) => ({
  textArea: {
    display: "flex",
    padding: theme.spacing(1.2, 1.4),
    height: "auto",
    width: "100%",
    background: theme.design.colors.white100,
    color: theme.design.colors.waz_primaryBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    borderColor: theme.design.colors.waz_primary700,

    "&:hover": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary400,
    },
    "&.error": {
      borderColor: theme.design.colors.error,
    },
  },
  errorMessage: {
    display: "block",
    marginTop: theme.spacing(0.5),
    fontSize: theme.typography.fontSize - 2,
    color: theme.design.colors.error,
  },
}));
