import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useComponentPropsComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.colors.waz_white,
    padding: theme.spacing(0.5, 3),
    border: `1px solid ${theme.design.colors.waz_primary600}`,
    textTransform: "capitalize",
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
  innerContent: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.fontSize - 2,
    color: theme.design.colors.waz_grey500,
  },

  textFieldRoot: {
    borderColor: theme.design.colors.waz_primary500,
  },
  wrapper: {
    background: theme.design.background.waz_primaryWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
}));
