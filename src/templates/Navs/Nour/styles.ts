import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNourStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: theme.design.font.openSans,
    border: "1px solid transparent",
    transition: "all 0.3s ease-in",
  },
  paper: {
    backgroundColor: theme.design.colors.waz_white,
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(3, 4),
    alignItems: "center",
    maxHeight: "72px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 2),
    },
  },
  logo: {
    height: "40px",
    width: "50px",
    border: "1px solid transparent",
    transition: "all 0.3s ease-in",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(4),
    marginLeft: "auto",
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
  },
  link: {
    color: theme.design.colors.waz_black,
    textDecoration: "none",
    fontSize: theme.typography.fontSize,
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "all 0.3s ease-in",
  },
  socialsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1.5),
      marginBottom: theme.spacing(0.5),
    },
  },
  socialIntegration: {
    color: theme.design.colors.waz_black,
    border: "1px solid transparent",
    transition: "all 0.3s ease-in",
  },
  hivedeckLogo: {
    width: "90px",
    height: "30px",
    border: "1px solid transparent",
    transition: "all 0.3s ease-in",
  },
  activeElement: {
    border: "1px dashed",
    borderColor: theme.design.colors.waz_primaryColor100,
  },
}));
