import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useCheckBoxInputStyles = makeStyles((theme: Theme) => ({
  requiredStar: {
    color: theme.kiamoniDesign.colors?.error,
  },
  multiChoiceFieldSet: {
    border: `1px solid ${theme.kiamoniDesign?.colors?.waz_primary700}`,
    padding: theme.spacing(0, 2.5, 1.5),
    "&.error": {
      borderColor: theme.kiamoniDesign?.colors?.waz_red,
    },
  },
  radioButton: {
    accentColor: theme.kiamoniDesign?.colors?.waz_grey100,
    cursor: "pointer",
    height: 16,
    width: 16,
  },
  radioGroupLabel: {
    cursor: "pointer",
    fontSize: theme.typography.fontSize,
    color: theme.kiamoniDesign?.colors?.waz_grey100,
  },
  radioGroup: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    marginBottom: theme.spacing(0.5),
    fontSize: theme.typography.fontSize,
    display: "block",
    color: theme.kiamoniDesign?.colors?.waz_grey100,
    "&.error": {
      color: theme.kiamoniDesign?.colors?.waz_red,
    },
  },
  errorMessage: {
    fontSize: theme.typography.fontSize - 2,
    color: theme.kiamoniDesign?.colors?.waz_red,
  },
}));
