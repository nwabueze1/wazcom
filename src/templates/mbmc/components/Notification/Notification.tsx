import { useNotificationStyles } from "./styles";

export const Notification = () => {
  const classes = useNotificationStyles();
  return <div className={classes.root}></div>;
};
