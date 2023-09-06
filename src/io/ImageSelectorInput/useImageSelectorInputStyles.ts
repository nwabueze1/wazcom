import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useImageSelectorInputStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    padding: theme.spacing(3, 6),
    background: theme.design.colors.waz_white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px dashed ${theme.design.colors.waz_primary500}`,
    width: "max-content",
  },
  selectButton: {
    background: theme.design.colors.waz_white,
    border: `1px solid ${theme.design.colors.waz_primary600}`,
    cursor: "pointer",
    padding: theme.spacing(1, 2),
    color: theme.design.colors.grey100,
    fontSize: theme.typography.fontSize,
    fontFamily: "inherit",
    outline: "none",
    borderRadius: 4,
    "&:hover": {
      borderColor: theme.design.colors.waz_primary400,
    },
  },
  selectInput: {
    display: "none",
  },
  selectedImageContainer: {
    padding: theme.spacing(1, 2),
  },
  imageContainer: {
    width: 116,
    height: 50,
  },
  selectedImage: {
    height: 50,
    width: 116,
  },
  button: {
    marginTop: theme.spacing(0.5),
    fontFamily: "inherit",
    width: 184,
    height: 25,
    fontSize: theme.typography.fontSize,
  },
  errorContainer: {
    borderColor: theme.design.colors.error,
  },
  helperTextError: {
    color: theme.design.colors.error,
    display: "block",
    margin: theme.spacing(0.5),
    fontFamily: "inherit",
    fontSize: theme.typography.fontSize,
  },
  label: {
    fontSize: theme.typography.fontSize - 2,
    textTransform: "uppercase",
    fontFamily: "inherit",
    marginBottom: theme.spacing(1.2),
  },
}));
