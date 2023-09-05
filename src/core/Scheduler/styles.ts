import { Theme } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";

export const useSchedulerStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  selectInput: {
    marginBottom: theme.spacing(2),
  },
  scheduleContainer: {
    padding: theme.spacing(1.5),
    border: '1px solid',
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 4,
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(2),
  },
  schedule: {
    background: theme.design.colors.waz_grey300,
    borderRadius: 16,
    width: "calc((100% - 16px)/2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0.75, 2),
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize - 2,
  },
  scheduleIcon: {
    cursor: "pointer",
    fontSize: theme.typography.fontSize - 1,
    color: theme.design.colors.waz_primaryBlack,
    opacity: 0.8,
  },
  timeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: theme.spacing(1),
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  timeInput: {
    width: "100%",
  },
  timeDivider: {
    position: "relative",
    top: -10,
    fontSize: theme.typography.fontSize - 2,
  },
  scheduleButton: {
    width: "100%",
    background: `${theme.design.colors.waz_white} !important`,
    color: `${theme.design.colors.waz_grey1} !important`,
    border: `1px solid`,
    borderColor: `${theme.design.colors.waz_primary600} !important`,
    fontSize: theme.typography.fontSize + 2,
  }
}));
