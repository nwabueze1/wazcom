import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
    "& .MuiAutocomplete-root .Mui-focused fieldset.MuiOutlinedInput-notchedOutline":
      {
        borderColor: theme.design.colors.waz_primaryColor100,
        outline: theme.design.colors.waz_primaryColor100,
        "&:hover": {
          borderColor: theme.design.colors.waz_primaryColor100,
          outline: theme.design.colors.waz_primaryColor100,
        },
      },
  },
  helperText: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.fontSize,
  },
  renderInput: {
    "& input.MuiOutlinedInput-input.MuiInputBase-input": {
      padding: theme.spacing(0),
    },
  },
}));
