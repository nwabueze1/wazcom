import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCardStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 0,
    minHeight: "100vh",
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
    textTransform: "capitalize",
    margin: 0,
    padding: 0,
  },
  description: {
    margin: 0,
    padding: 0,
    width: "60vw",
  },
  descriptionText: {
    fontSize: theme.typography.h5.fontSize,
  },
  inputContainer: {
    background: theme.design.background.waz_primaryWhite,
    borderColor: theme.design.colors.grey900,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(6.25),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(8.75),
  },
  inputs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(4),
    margin: 0,
    padding: 0,
  },
}));
