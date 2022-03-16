import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableControlsStyles = makeStyles((theme: Theme) => ({
    controls: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(2),
    },
    filterControls: {
      display: "flex",
      gap: theme.spacing(3.75),
    },
    filterControlsButton: {
      backgroundColor: theme.design.colors.white,
      color: theme.design.colors.black,
      height: "fit-content",
      width: "100px",
      display: "flex",
      justifyContent: "space-between",
    },
    rightControls: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    actionButton: {
      backgroundColor: theme.design.colors.white,
      color: theme.design.colors.black,
      display: "flex !important",
      alignItems: "center",
      gap: theme.spacing(1)
    },
  }));
  