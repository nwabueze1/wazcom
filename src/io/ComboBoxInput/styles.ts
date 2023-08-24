import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  comboBoxLabel: {
    display: "block",
    marginBottom: theme.spacing(1.5),
    fontSize: theme.typography.fontSize - 2,
  },
  comboBoxRequired: {
    color: theme.design.colors.waz_dangerColor100,
    margin: theme.spacing(-0.5, 0.5, 0, 0.5),
  },
  comboBoxOptions: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    width: "100%",
    padding: theme.spacing(1, 0),
    background: theme.design.colors.waz_white,
    borderRadius: 3,
    boxShadow: `0px 1px 4px ${theme.design.colors.shadow100}`,
    maxHeight: 400,
    overflowY: "scroll",
    zIndex: 5,
  },
  comboBoxOption: {
    padding: theme.spacing(1, 1.25),
    background: "transparent",
    transition: "all 0.3s ease-in",
    cursor: "pointer",

    "&:hover": {
      background: theme.design.colors.waz_primary900,
    },

    "& .label": {
      fontSize: theme.typography.fontSize,
    },

    "& .subText": {
      marginTop: theme.spacing(0.5),
    },
  },
}));
