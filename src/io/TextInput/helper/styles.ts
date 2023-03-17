import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const usePasswordValidatorStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    color: theme.design.colors.waz_grey600,
    marginBottom: theme.spacing(1.2),
  },
  iconWrapper: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.design.colors.waz_grey600,
    color: theme.design.colors.waz_white,
    marginRight: theme.spacing(.4)
  },
  iconSuccess: {
    backgroundColor: theme.design.colors.waz_primaryColor100
  },
  iconError: {
    backgroundColor: theme.design.colors.error
  },
  labelSuccess: {
    color: theme.design.colors.waz_primaryColor100
  },
  labelError: {
    color: theme.design.colors.error
  },
  labelDefault: {
    color: 'inherit'
  }
}));
