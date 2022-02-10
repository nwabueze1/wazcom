import { FC } from "react";
import { useNotificationStyles } from "./style";
import clx from "classnames";
import { NotificationProps } from "./types";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
// import Icon from "../../images/Vector.png";

const getStatusClassName = (
  classes: ReturnType<typeof useNotificationStyles>,
  status: NotificationProps["status"],
) => {
  switch (status) {
    case "success":
      return classes.success;
    case "failed":
      return classes.failed;
    case "plain":
      return classes.plain;
    default:
      return classes.success;
  }
};

export const Notification: FC<NotificationProps> = ({
  status,
  title,
  message,
  onClose
}) => {
  const classes = useNotificationStyles();
  const StatusClassName = getStatusClassName(classes, status);

  return (
    <div className={clx(classes.card)}>
      <div
        className={clx(
          classes.notificationCard,
          status !== "success" && classes.plainBg,
        )}
      >
        <div className={clx(StatusClassName, classes.notificationHead)}>
          <Typography className={classes.report}>{title}</Typography>
          <CloseIcon onClick={() => { onClose?.() }} className={classes.cancel} />
        </div>
        {message && <Typography className={classes.notificationText}>{message}</Typography>}
      </div>
    </div>
  );
};
