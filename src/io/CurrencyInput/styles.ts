import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CurrencyIconStyleProps, CurrencyBaseProps } from "./types";

export const useCurrencyInputStyles = makeStyles((theme: Theme) => ({
  root: (props: CurrencyBaseProps) => ({
    position: "relative",
    display: "flex",
    flexDirection: props.variant === "vertical" ? "column" : "row",
    alignItems: "start",
    justifyContent: "start",
    gap: 16,
    width: "100%",
    height: "100%",
  }),
  currencyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  selectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginBottom: -16,
  },
  label: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    marginBottom: 8,
    color: theme.design.colors.waz_grey,
    alignItems: "center",
    letterSpacing: "0.13px",
    textTransform: "uppercase",
  },
  selectLabel: {
    color: theme.design.colors.waz_grey,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 2,
  },
  required: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(-0.5, 0.5, 0, 0.5),
  },
  baseInput: (props: CurrencyBaseProps) => ({
    display: "flex",
    padding: !props.isSelectCurrency ? "8px 12px" : 0,
    height: props.height ?? 34,
    width: props.width ?? 187,
    background: `${props.background ?? theme.design.colors.white100} 0% 0% no-repeat padding-box`,
    color: props.color ?? theme.design.colors.waz_primaryBlack,
    borderWidth: props?.borderWidth ?? 1,
    borderStyle: props?.borderStyle ?? "solid",
    borderRadius: props?.borderRadius ?? 4,
    fontWeight: 400,
    fontSize: theme.typography.fontSize,
    borderColor: props?.borderColor ?? theme.design.colors.primary700,
    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
  }),
  baseTextArea: (props: CurrencyBaseProps) => ({
    display: "flex",
    padding: 10,
    outline: 0,
    background: `${props.background ?? theme.design.colors.white100} 0% 0% no-repeat padding-box`,
    color: props.color ?? theme.design.colors.waz_primaryBlack,
    borderWidth: props?.borderWidth ?? 1,
    borderStyle: props?.borderStyle ?? "solid",
    borderRadius: props?.borderRadius ?? 4,
    fontWeight: 400,
    fontSize: theme.typography.fontSize,
    borderColor: props?.borderColor ?? theme.design.colors.primary700,
    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
  }),
  defaultInput: (props: CurrencyBaseProps) => ({
    borderColor: props?.borderColor ?? theme.design.colors.primary700,
    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
  }),
  focusedInput: (props: CurrencyBaseProps) => ({
    borderColor: props?.borderColor ?? theme.design.colors.primary400,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
  }),
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
  input: {
    display: "flex",
    width: "100%",
    background: "transparent",
    border: 0,
    outline: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: theme.typography.fontSize,
  },
  textAreaContainer: {
    padding: 0,
    margin: 0,
    border: 0,
    width: "100%",
  },
  textAreaInput: {
    padding: 0,
    margin: 0,
    border: 0,
  },
  wordCount: {},
  labelWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  helperTextDefault: {
    display: "flex",
    width: "100%",
    letterSpacing: 0,
    fontSize: 8,
    textAlign: "left",
    marginTop: 4,
  },
  helperTextSuccess: {
    color: theme.design.colors.waz_primaryColor100,
  },
  helperTextError: {
    color: theme.design.colors.error,
  },
  currencySelectRoot: {
    position: "relative",
    backgroundColor: "transparent",
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
  },
  currencySingle: {
    fontSize: 14,
    fontWeight: 700,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.primary600,
    borderRightStyle: "solid",
    paddingRight: 10,
  },
  currencyMultiple: {
    fontSize: 14,
    fontWeight: 700,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.primary600,
    borderRightStyle: "solid",
    paddingRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    cursor: "pointer",
  },

  selectInputClass: {
    display: "block",
    // position: 'absolute',
    marginBottom: 0,
    border: 0,
  },
}));

export const useCurrencyIconStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    backgroundColor: "transparent",
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
  },
  iconSpacing: (props: CurrencyIconStyleProps) => ({
    marginRight: `${props.marginRight}px`,
    marginLeft: `${props.marginLeft}px`,
  }),
  currencySingle: {
    fontSize: 14,
    fontWeight: 700,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.primary600,
    borderRightStyle: "solid",
    paddingRight: 10,
  },
  currencyMultiple: {
    fontSize: 14,
    fontWeight: 700,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.primary600,
    borderRightStyle: "solid",
    paddingRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    cursor: "pointer",
  },
}));

export const useSelectInputStyles = makeStyles(() => ({
  root: {
    boxSizing: "border-box",
    "&:before, &:after": {
      boxSizing: "border-box",
    },
    "& select": {},
  },
}));
