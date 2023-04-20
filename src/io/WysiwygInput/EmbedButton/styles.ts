import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useInsertButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  insertButton: {
    background: `${theme.design.colors.waz_primary700} !important`,
    borderRadius: "50%",
    width: `${theme.spacing(4)} !important`,
    height: `${theme.spacing(4)} !important`,
    fontSize: theme.typography.fontSize * 1.5,
    border: "0px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectOption: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "277px",
    height: "181px",
    border: "0px",
    borderRadius: "3px",
    margin: theme.spacing(0, 0, 0, 2),
    boxShadow: "0px 1px 4px #00000014",
    background: theme.design.colors.waz_white,
    zIndex: "9",
  },
  optionTitleSpan: {
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(1, 1, 1, 1),
    fontWeight: 800,
    color: theme.design.colors.grey,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  linkIcon: {
    fontSize: theme.typography.fontSize + 4,
  },
  showOptions: {
    display: "flex",
    position: "absolute",
    left: 16,
  },
  hideOptions: {
    display: "none",
  },
}));
