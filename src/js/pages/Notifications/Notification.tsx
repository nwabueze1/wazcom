import React, { FC } from "react";
import useStyles from "./style";
import clx from "classnames";
import { NotificationProps } from "./type";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const getStatusClassName = (
  classes: ReturnType<typeof useStyles>,
  status: NotificationProps["status"],
) => {
  switch (status) {
    case "success":
      return classes.success;
      break;

    default:
      return classes;
  }
};

const Notification: FC<NotificationProps> = ({ status }) => {
  const classes = useStyles();
  const StatusClassName = getStatusClassName(classes, status);
  return (
    <div className={clx()}>
      <div className={classes.notificationCard}>
        <div className={clx(StatusClassName)}>
          <NotificationsNoneIcon className={classes.alarm} />
          <Typography className={classes.report}>Action report</Typography>
          <CloseIcon className={classes.cancel} />
        </div>
        <div className={classes.notificationInfo}>
          <Typography className={classes.notificationHeading}>
            Image Successfully uploaded
          </Typography>
          <Typography className={classes.notificationText}>
            Profile image successfully changed
          </Typography>
        </div>
        <Typography className={classes.status}>Success Notification</Typography>
      </div>
    </div>
  );
};

export default Notification;
