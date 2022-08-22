import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    width: `calc(100% - ${theme.spacing(6)})`,
    maxWidth: theme.include.styles.maxWidth,
    margin: "0, auto",
    display: "flex",
    background: theme.design.colors.waz_white,
    borderRadius: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1.5, 6),
    zIndex: 10,
    [theme.breakpoints.down("lg")]: {
      width: `calc(100% - ${theme.spacing(6)})`,
      borderRadius: 0,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: 0,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  logoContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 3),
    },
  },
  headerLogo: {
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
    },
  },
  searchField: {
    borderRadius: "20px",
    width: "40%",
    marginBottom: 0,
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      height: 40,
      [theme.breakpoints.down("sm")]: {
        borderRadius: 0,
      },

    },
    "&.MuiOutlinedInput-input": {
      // padding: theme.spacing(1, 0),
    },
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
      width: "100%",
    },
  },
}));
