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
    gap: theme.spacing(4),
    width: "100%",
    height: "100%",
  }),
  horizontalRoot: (props: CurrencyBaseProps) => ({
    position: "relative",
    display: "flex",
    flexDirection: props.variant === "vertical" ? "column" : "row",
    alignItems: "start",
    justifyContent: "start",
    gap: theme.spacing(1),
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(4),
    },
  }),
  currencyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
  selectContainer: (props: CurrencyBaseProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginBottom: -16,
    width: props.variant === "vertical" ? "100%" : "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }),
  label: {
    fontSize: theme.typography.fontSize - 2,
    display: "flex",
    marginBottom: theme.spacing(1),
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
    height: 34,
    width: 187,
    background: `${theme.design.colors.waz_white100} 0% 0% no-repeat padding-box`,
    color: theme.design.colors.waz_primaryBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: theme.spacing(0.5),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    borderColor: theme.design.colors.waz_primary700,
    '&[data-disabled="true"]': {
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.6,
    },
    "&:hover": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary500,
    },
  }),
  defaultInput: {
    borderColor: theme.design.colors.primary700,
    "&:hover": {
      borderColor: theme.design.colors.primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
    },
  },
  focusedInput: {
    borderColor: theme.design.colors.primary400,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.primary400,
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
  input: {
    display: "flex",
    width: "100%",
    background: "transparent",
    border: 0,
    outline: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    paddingLeft: theme.spacing(1),
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
    fontSize: 8,
    textAlign: "left",
    marginTop: theme.spacing(0.5),
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
    fontWeight: theme.typography.fontWeightBold,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.waz_primary600,
    borderRightStyle: "solid",
    paddingRight: 10,
  },
  currencyMultiple: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    lineSpacing: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: theme.design.colors.grey100,
    borderRightWidth: 1,
    borderRightColor: theme.design.colors.waz_primary600,
    borderRightStyle: "solid",
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    cursor: "pointer",
  },
  selectInputClass: {
    display: "block",
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
    fontWeight: theme.typography.fontWeightBold,
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
    fontWeight: theme.typography.fontWeightBold,
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
  },
}));
