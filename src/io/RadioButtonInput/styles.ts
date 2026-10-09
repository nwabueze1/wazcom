import { makeStyles } from "@mui/styles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useRadioButtonInputStyles = makeStyles((theme: BaseTheme) => ({
  base: {
    position: "relative",
  },
  root: {
    position: "relative",

    "& .feedback": {
      marginTop: `${theme.spacing(0.5)} !important`,
    },
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    height: theme.spacing(1),
    width: theme.spacing(1),

    "& input:checked ~ .custom__radio": {
      backgroundColor: theme.design.colors.waz_primary100,
      outline: `1px solid ${theme.design.colors.waz_primary100}`,
      "&.disabled": {
        opacity: 0.1,
      },
    },
  },
  labelStyle: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    letterSpacing: "0.13px",
    textTransform: "uppercase",
    cursor: "pointer",
    marginBottom: theme.spacing(1),
  },
  input: {
    position: "absolute",
    opacity: "0",
    cursor: "pointer",
    height: "0",
    width: "0",
  },
  checkedIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
  },
  helperText: {
    fontSize: theme.typography.fontSize - 2,
    marginTop: theme.spacing(0.5),
  },
  customRadio: {
    position: "absolute",
    top: 0,
    left: 0,
    height: theme.spacing(1),
    width: theme.spacing(1),
    borderRadius: theme.spacing(8),
    outline: `1px solid ${theme.design.colors.grey700}`,
    outlineOffset: "3px",

    "&.disabled": {
      opacity: 0.1,
    },
    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
    "&:after": {
      content: "",
      position: "absolute",
      display: "none",
    },
  },
}));
