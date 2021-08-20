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
      return `${classes.successBg} && ${classes.success}`;
      break;
    case "failed":
      return `${classes.failedBg} && ${classes.failed}`;
      break;
    case "plain":
      return `${classes.plainBg} && ${classes.plain}`;
      break;
    default:
      return `${classes.successBg} && ${classes.success}`;
  }
};

const Notification: FC<NotificationProps> = ({
  status,
  uploadStatus,
  uploadFeedBack,
  statusAlert,
}) => {
  const classes = useStyles();
  const StatusClassName = getStatusClassName(classes, status);
  return (
    <div className={clx(classes.card)}>
      <div
        className={clx(
          classes.notificationCard,
          classes.plainBg,
          classes.successBg,
        )}
      >
        <div className={clx(StatusClassName, classes.notificationHead)}>
          <img src={Icon} alt="notification image" className={classes.alarm} />
          <Typography className={classes.report}>Action report</Typography>
          <CloseIcon className={classes.cancel} />
        </div>
        <div className={classes.notificationInfo}>
          <Typography className={classes.notificationHeading}>
            {uploadStatus}s
          </Typography>
          <Typography className={classes.notificationText}>
            {uploadFeedBack}
          </Typography>
        </div>
      </div>
      <Typography className={classes.status}>{statusAlert}</Typography>
    </div>
  );
};

export default Notification;
