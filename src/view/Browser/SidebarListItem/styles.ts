import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useSidebarListItemStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  list: {
    listStyle: "none",
    overflow: "hidden",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create(["max-height"], {
      duration: theme.transitions.duration.standard,
    }),
  },
  listItem: {
    margin: `${theme.spacing(1)} 0`,
    "& h5": {
      textTransform: "uppercase",
    },
  },
  label: {},
  chevronIcon: {
    transition: "transform 0.1s ease-in",
  },
  button: {
    width: "100%",
  },
  isVisible: {
    minHeight: 200,
    height: "auto",
  },
  isNotVisible: {
    maxHeight: 0,
  },
  innerList: {
    listStyle: "none",
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  innerListItem: {},
  link: {
    display: "flex",
    cursor: "pointer",
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(
      1,
    )} ${theme.spacing(1.5)}`,
    transition: theme.transitions.create(["background-color"]),
    textDecoration: "none",
    color: "inherit",
  },
  linkActive: {
    backgroundColor: theme.design.colors.gray,
  },
}));
