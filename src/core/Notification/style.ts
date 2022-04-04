import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useNotificationStyles = makeStyles((theme: BaseTheme) => ({
  notificationCard: {
    borderRadius: "10px",
  },
  card: {
    width: "28%",
    marginRight: theme.spacing(5),
  },
  notificationHead: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.design.colors.success,
    padding: theme.spacing(0.5, 0.5),
    marginBottom: theme.spacing(1),
    borderRadius: "8px",
  },
  success: {
    backgroundColor: theme.design.colors.success,
    opacity: 0.6,
  },
  failed: {
    backgroundColor: theme.design.colors.red40,
  },
  plainBg: {
    backgroundColor: theme.design.colors.gray20,
  },
  plain: {
    backgroundColor: theme.design.colors.gray40,
  },
  cancel: {
    backgroundColor: theme.design.colors.white,
    color: theme.design.colors.dangerColor300,
    marginLeft: "auto",
    borderRadius: "50%",
    cursor: "pointer",
  },
  alarm: {
    color: theme.design.colors.gray80,
  },
  report: {
    color: theme.design.colors.gray80,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize + 3,
    padding: theme.spacing(1),
  },
  notificationInfo: {
    padding: theme.spacing(1),
  },
  notificationHeading: {
    color: theme.design.colors.black,
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    marginLeft: theme.spacing(1),
    fontStyle: "normal",
  },
  notificationText: {
    color: theme.design.colors.gray80,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize + 1,
    fontStyle: "normal",
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1, 0, 2, 0),
  },
  status: {
    color: theme.design.colors.gray80,
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: "16px",
    marginTop: theme.spacing(2),
  },
}));
