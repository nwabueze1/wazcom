import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    background: theme.design.colors.waz_white100,
  },
  label: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    marginBottom: theme.spacing(1),
    color: theme.design.colors.waz_greyColor400,
    alignItems: "center",
    letterSpacing: "0.13px",
    textTransform: "uppercase",
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(-0.5, 0.5, 0, 0.5),
  },
  select: {
    height: 34,
    minHeight: 34,
    borderColor: `${theme.design.colors.waz_primary500} !important`,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    "&:hover": {
      borderColor: `${theme.design.colors.waz_primary600} !important`,
    },
    "&:focus": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:hover:focus": {
      borderColor: theme.design.colors.waz_primary500,
    },
  },
  error: {
    border: `1px solid ${theme.design.colors.error}`,
    "&:hover": {
      borderColor: theme.design.colors.error,
    },
    "&:focus": {
      borderColor: theme.design.colors.error,
    },
    "&:hover:focus": {
      borderColor: theme.design.colors.error,
    },
  },
  labelWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  control: {
    background: theme.design.colors.waz_white100,
    borderColor: `${theme.design.colors.waz_primary500} !important`,
    boxShadow: "none !important",
    "&:hover": {
      borderColor: theme.design.colors.waz_primary600,
    },
  },
  option: {
    backgroundColor: `${theme.design.colors.waz_primary900} !important`,
  },
  defaultInput: {
    borderColor: theme.design.colors.waz_primary700,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary700,
    },
  },
  errorInput: {
    borderColor: theme.design.colors.red500,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.red500,
    },
  },
  successInput: {
    borderColor: theme.design.colors.waz_primaryColor100,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  },
  helperTextDefault: {
    display: "flex",
    width: "100%",
    letterSpacing: 0,
    fontSize: theme.typography.fontSize - 1,
    textAlign: "left",
    marginTop: theme.spacing(0.5),
  },
  helperTextSuccess: {
    color: theme.design.colors.waz_primaryColor100,
  },
  helperTextError: {
    color: theme.design.colors.error,
  },
}));
