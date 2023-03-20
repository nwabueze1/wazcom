import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useRadioButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(5),
  },
  header: {
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(1),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h1.fontSize,
    color: theme.design.colors.waz_primaryBlack,
    margin: 0,
    padding: 0,
  },
  wrapper: { paddingBottom: theme.spacing(2), minHeight: '70px', height: '80px' },
  description: {
    margin: 0,
    padding: 0,
    width: "60vw",
  },
  descriptionText: {
    fontSize: theme.typography.h5.fontSize,
    lineSpacing: theme.spacing(22),
  },
  inputContainer: {
    background: theme.design.background.waz_primaryWhite,
    borderColor: theme.design.colors.grey900,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    padding: 24,
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  inputs: {
    width: "100%",
    maxWidth: '220px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,

    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  },
  input: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0
  },
}));
