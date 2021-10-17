import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme:Theme) => ({
  root: {
    // height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  imageBox: {
    backgroundColor: "rgba(229, 229, 229, 0.41)",
  },
  image: {
    height: "80%",
    width: "80%",
    left: 601,
    top: 247,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(5, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  social: {
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
  },
  social2: {
    paddingLeft: theme.spacing(6),
    textAlign: "center",
  },
  logo: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    marginLeft: theme.spacing(5),
    textAlign: "left",
  },
  textfield: {
    marginBottom: "10px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
  forgot: {
    marginLeft: theme.spacing(41),
  },
  link: {
    color: theme.design.colors.white,
  },
  button: {
    width: "15%",
    borderRadius: "10px",
    fontSize: "0.7rem",
    padding: "1em 0.5em",
  },
}));
