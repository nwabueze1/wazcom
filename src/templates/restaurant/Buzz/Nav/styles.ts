import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    width: "88%",
    maxWidth: theme.include.styles.maxWidth,
    margin: "0, auto",
    display: "flex",
    background: theme.design.colors.waz_white,
    borderRadius: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 3),
    zIndex: 10,
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
    },
    "& 	.MuiOutlinedInput-input": {
      padding: theme.spacing(1.5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
}));
