import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCustomStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    position: "relative",
  },
  inputGroup: {
    display: "block",
  },
  inputContainer: {
    width: "100%",
    border: `1px solid ${theme.design.colors.blackVariant4}`,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2, 1.5),
    position: "relative",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      border: `1px solid ${theme.design.colors.blackVariant1}`,
    },
  },
  inputError: {
    borderColor: theme.design.colors.error100,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.error100,
    },
  },
  inputSuccess: {
    borderColor: theme.design.colors.waz_primaryColor100,
    "&:hover, &:focus, &:hover:focus, &:active": {
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  },
  input: {
    outline: "none",
    border: "none",
    width: "100%",
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.blackVariant2,
    transition: "border-color 0.3s",
    "&::placeholder": {
      color: theme.design.colors.blackVariant3,
      fontSize: theme.typography.fontSize + 2,
    },
    flex: 1,
  },
  labelContainer: {
    position: "absolute",
    top: 8,
    left: 10,
    transition: "top 0.5s, font-size 0.3s",
    pointerEvents: "none",
    zIndex: 1,
    transform: "translateY(0)",
    "&.active": {
      top: 6,
      left: 4,
      transform: "translateY(-100%)",
      color: theme.design.colors.green,
    },
  },
  inputLabel: {
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.blackVariant2,
    textTransform: "capitalize",
  },
  activeLabel: {
    top: 6,
    transform: "translateY(-100%)",
    backgroundColor: theme.design.colors.white,
    color: theme.design.colors.green,
    "&.error": {
      color: theme.design.colors.red,
    },
  },
  requiredStar: {
    color: theme.design.colors.red,
  },
  visibilityIcon: {
    fill: theme.design.colors.blackVariant3,
    color: theme.design.colors.blackVariant3,
    fontSize: theme.typography.fontSize + 2,
    "&:hover": {
      cursor: "pointer",
    },
  },
  list: {
    listStyle: "disc",
    listStyleImage: "disc",
    gap: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    flexWrap: "wrap",
    fontSize: theme.typography.fontSize - 4,
    color: theme.design.colors.blackVariant3,
    fontFamily: theme.design.font.inter,
    "& li": {
      display: "inline-block",
      marginRight: 30,
      fontSize: theme.typography.fontSize - 4,
      color: theme.design.colors.blackVariant3,
      "&.error": {
        color: theme.design.colors.red,
      },
      "&.success": {
        color: theme.design.colors.green,
      },
    },
  },
}));
