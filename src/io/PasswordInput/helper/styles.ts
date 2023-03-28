import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePasswordValidationStyles = makeStyles((theme: Theme) => ({
  containerItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: theme.design.colors.waz_grey600,
    marginBottom: theme.spacing(1.2),
  },
  container: {
    padding: 0,
    marginTop: theme.spacing(1.6),
    alignSelf: "baseline",
    fontSize: theme.typography.fontSize - 1.5,
  },
  iconWrapper: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.design.colors.waz_grey600,
    color: theme.design.colors.waz_white,
    marginRight: theme.spacing(0.4),
  },
  iconSuccess: {
    backgroundColor: theme.design.colors.waz_primaryColor100,
  },
  iconError: {
    backgroundColor: theme.design.colors.error,
  },
  labelSuccess: {
    color: theme.design.colors.waz_primaryColor100,
  },
  labelError: {
    color: theme.design.colors.error,
  },
  labelDefault: {
    color: "inherit",
  },
}));
