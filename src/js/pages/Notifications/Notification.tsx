import React, { FC } from "react";
import useStyles from "./style";
import clx from "classnames";
import { NotificationProps } from "./type";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import Icon from ".././../../images/Vector.png";

const getStatusClassName = (
  classes: ReturnType<typeof useStyles>,
  status: NotificationProps["status"],
) => {
  switch (status) {
    case "success":
      return classes.success;
      break;
    case "failed":
      return classes.failed;
      break;
    case "plain":
      return classes.plain;
      break;
    default:
      return classes.success;
  }
};

const Notification: FC<NotificationProps> = ({
  status,
  title,
  message,
  statusAlert,
}) => {
  const classes = useStyles();
  const StatusClassName = getStatusClassName(classes, status);

  return (
    <>
      <div className={clx(classes.card)}>
        <div
          className={clx(
            classes.notificationCard,
            status !== "success" && classes.plainBg,
          )}
        >
          <div className={clx(StatusClassName, classes.notificationHead)}>
            <img
              src={Icon}
              alt="notification image"
              className={classes.alarm}
            />
            <Typography className={classes.report}>Action report</Typography>
            <CloseIcon className={classes.cancel} />
          </div>
          <div className={classes.notificationInfo}>
            <Typography className={classes.notificationHeading}>
              {title}
            </Typography>
            <Typography className={classes.notificationText}>
              {message}
            </Typography>
          </div>
        </div>
        <Typography className={classes.status}>{statusAlert}</Typography>
      </div>
    </>
  );
};

export default Notification;
