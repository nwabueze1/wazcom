import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 2, 2),
    "& *": {
      fontFamily: theme.design.font.tomatoGrotesk,
    },
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.4),
  },
  title: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: theme.design.font.tomatoGrotesk,
    color: theme.design.colors.waz_brand800,
  },
  filter: {
    display: "flex",
    gap: 4,
    padding: "2px 10px",
    borderRadius: theme.spacing(2),
    border: "0.3px solid rgba(37, 165, 90, 0.20)",
    background: theme.design.colors.waz_brand50,
    alignItems: "center",
  },
  filterText: {
    fontSize: 10,
    color: "#28434F",
    fontFamily: theme.design.font.tomatoGrotesk,
    "&.label": {
      color: "#ACBCC4",
    },
  },
  filterIcon: {
    "& svg": {
      color: "#28434F",
      width: 14,
      height: 14,
    },
  },
  filterRemove: {
    padding: 0,
    height: 14,
    width: 14,
    borderRadius: "50%",
    background: "#ACBCC4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    "& svg": {
      color: theme.design.colors.waz_white,
      width: 12,
      height: 12,
    },
  },
  moreFilters: {
    fontSize: 10,
    color: "#ACBCC4",
    marginRight: 10,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: 1,
      height: "100%",
      background: "#E6E6E6",
      right: -10,
    },
  },

  clearFilters: {
    fontSize: 10,
    color: "#E83636",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    fontFamily: theme.design.font.tomatoGrotesk,
    fontWeight: 400,
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    gap: 4,
    "& svg": {
      width: 12,
      height: 12,
    },
  },
}));
