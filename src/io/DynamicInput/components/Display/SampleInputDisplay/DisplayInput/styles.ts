import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useDisplayInputStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  newRoot: {
    width: "100%",
    height: "100%",
  },
  displayIcon: {
    fontSize: 30,
    color: theme.design.colors.waz_greyColor500,
    cursor: "pointer",
  },
  displayInput: {
    color: theme.design.colors.waz_primaryColor100,
    width: "calc(100% - 30px)",
    border: 0,
    padding: theme.spacing(0, 1),

    "& div::before": {
      border: 0,
    },

    "& div::after": {
      border: `1px solid ${theme.design.colors.waz_primaryColor100}`,
    },

    "& div:hover:not(.Mui-disabled):before": {
      borderColor: theme.design.colors.waz_primaryColor100,
    },
  },
  mediaIcon: {
    paddingRight: theme.spacing(1),
  },
  mediaContainer: {
    marginLeft: theme.spacing(1),
    position: "relative",
    width: 200,
    height: 100,
  },
  media: {
    marginLeft: theme.spacing(1),
    position: "relative",
    width: 200,
    height: 100,
  },
  mediaCancelIcon: {
    fontSize: 20,
    position: "absolute",
    top: theme.spacing(-1),
    right: theme.spacing(-1.5),
    zIndex: 10,
    cursor: "pointer",
  },
}));
