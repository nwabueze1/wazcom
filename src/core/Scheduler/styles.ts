import { Theme } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

export const useSchedulerStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2, 0, 0, 0),
    cursor: "pointer",
  },
  buttonText: {
    margin: "0",
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.design.colors.greene,
    display: "flex",
    alignItems: "center"
  },
  addIcon: {
    marginRight: theme.spacing(1.5),
  },
  schedulerContainer: {
    display: "flex",
    alignItems: "center",
  },
  timeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeDivider: {
    margin: theme.spacing(0, 1),
  },
  dayContainer: {
    marginRight: "10%" 
  },
  closeIcon: {
    color: theme.design.colors.grey5,
    marginLeft: theme.spacing(1.5),
    cursor: "pointer"
  },
  hiddenCloseIcon: {
    display: "none"
  }
}));
