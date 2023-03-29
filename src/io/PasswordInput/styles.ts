import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const usePasswordInputStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  label: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    marginBottom: theme.spacing(1),
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    textTransform: "uppercase",
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(-0.5, 0.5, 0, 0.5),
  },
  baseInput: {
    display: "flex",
    padding: theme.spacing(1.2, 1.4),
    height: 34,
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
  },
  baseTextArea: {
    display: "flex",
    padding: 10,
    outline: 0,
    width: "100%",
    fontFamily: theme.design.font.openSans,
    background: theme.design.colors.white100,
    color: theme.design.colors.waz_primaryBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    borderColor: theme.design.colors.primary700,
    "&:hover": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary400,
    },
  },
  defaultInput: {
    borderColor: theme.design.colors.waz_primary700,
    "&:hover": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary400,
    },
  },
  focusedInput: {
    borderColor: theme.design.colors.waz_primary400,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary400,
    },
  },
  errorInput: () => ({
    borderColor: theme.design.colors.error,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.error,
    },
  }),
  successInput: () => ({
    borderColor: theme.design.colors.waz_primaryColor100,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  }),
  iconButton: {
    cursor: "pointer",
    all: "unset",
  },
  input: {
    display: "flex",
    width: "100%",
    background: "transparent",
    border: 0,
    outline: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
  },
  labelWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  helperTextDefault: {
    display: "flex",
    width: "100%",
    letterSpacing: 0,
    fontSize: theme.typography.fontSize - 1,
    textAlign: "left",
    marginTop: theme.spacing(0.8),
  },
  helperTextSuccess: {
    color: theme.design.colors.waz_primaryColor100,
  },
  helperTextError: {
    color: theme.design.colors.error,
  },
}));

export const useTextInputIconStyles = makeStyles(() => ({
  root: {
    position: "relative",
    backgroundColor: "transparent",
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
  },
}));
