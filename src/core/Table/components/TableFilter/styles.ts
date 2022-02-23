import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useFilterStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    zIndex: 99,
    backgroundColor: theme.design.colors.white,
    width: "300px",
    height: "100%",
    top: 0,
    right: "-100%",
    transition: "right 0.6s ease-in-out",
    overflowY: "scroll",
  },
  show: {
    right: 0,
  },
  overlay: {
    backgroundColor: theme.design.colors.black,
    zIndex: 55,
    position: "absolute",
    width: "100%",
    height: "100%",
    visibility: "hidden",
    opacity: 0,
    top: 0,
    transition: "all 0.6s ease-in-out",
  },
  showOverlay: {
    visibility: "visible",
    opacity: 0.25,
  },
  filterItem: {
    display: "flex",
    alignItems: "center",
  },
}));
