import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useWrapperStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
  },
  containerWrapper: {
    background: theme.design.background.waz_primaryWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    padding: theme.spacing(2.5, 3),
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
    maxWidth: "1100px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: theme.spacing(2.5),
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
  wrapper: { paddingBottom: theme.spacing(2) },
  description: {
    margin: 0,
    padding: 0,
    width: "60vw",
  },
  descriptionText: {
    fontSize: theme.typography.h5.fontSize,
    lineSpacing: theme.spacing(22),
  },
  innerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
}));
