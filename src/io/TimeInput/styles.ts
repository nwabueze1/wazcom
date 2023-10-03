import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTimeInputStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",

    "& .rc-time-picker-clear": {
      right: "-5px !important",
    },
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
    alignItems: "center",
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1.5),
    height: 36,
    background: theme.design.colors.white100,
    color: theme.design.colors.waz_primaryBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    borderColor: theme.design.colors.waz_primary700,
    boxSizing: "border-box",

    "&:hover": {
      borderColor: theme.design.colors.waz_primary500,
    },
    "&:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primary400,
    },

    "& .rc-time-picker-input": {
      background: "transparent",
      border: 0,
      outline: 0,
    },
  },
  errorInput: {
    borderColor: theme.design.colors.error,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.error,
    },
  },
  successInput: {
    borderColor: theme.design.colors.waz_primaryColor100,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  },
  containerDiv: {
    background: "transparent",
    border: 0,
    borderRadius: 4,
    zIndex: 1500,
    width: "160px !important",

    "& .rc-time-picker-panel-select": {
      width: "unset",
      padding: theme.spacing(0, 1),

      "&::-webkit-scrollbar": {
        width: 4,
        background: "rgba(0,0,0,0.05)",
      },

      "&::-webkit-scrollbar-thumb": {
        background: "rgba(0,0,0,0.25)",
      },

      "&::-webkit-scrollbar-track": {
        background: "rgba(0,0,0,0.01)",
      },
    },

    "& .rc-time-picker-panel-inner": {
      background: theme.design.colors.grey600,
      border: 0,
      borderRadius: 4,

      "& .rc-time-picker-panel-combobox": {
        display: "flex",
        gap: theme.spacing(0),
        margin: theme.spacing(1),
      },
      "& .rc-time-picker-panel-input-wrap": {
        background: "transparent",
        border: "none",
        boxShadow: "none",
      },
      "& .rc-time-picker-panel-input": {
        background: theme.design.colors.grey600,
      },
      "& .rc-time-picker-panel-select": {
        border: 0,
      },
      "& .rc-time-picker-panel-select ul li": {
        fontSize: theme.typography.fontSize - 1,
        fontWeight: theme.typography.fontWeightRegular,
        borderRadius: 4,
        height: 30,
        width: 30,
      },
      "& .rc-time-picker-panel-select-active ul li": {
        fontSize: theme.typography.fontSize - 1,
        fontWeight: theme.typography.fontWeightRegular,
        borderRadius: 4,
        height: 30,
        width: 30,
      },
      "& .rc-time-picker-panel-select-option-selected": {
        background: theme.design.colors.waz_primary50,
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize - 1,
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: 4,
        height: 30,
        width: 30,
      },
      "& .rc-time-picker-panel-select li": {
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
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

  timeRangeSeperator: {
    fontSize: theme.typography.fontSize - 2,
    color: theme.design.colors.waz_greyColor400,
  },
  timeRangeDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: theme.spacing(1),
  },

  helperTextDefault: {
    display: "flex",
    width: "100%",
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
  clearTimer: {
    cursor: "pointer",
  },
}));
