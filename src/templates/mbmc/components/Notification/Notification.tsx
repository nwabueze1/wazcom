import { useContext } from "react";
import { RestaurantContext } from "../../contexts";
import { useNotificationStyles } from "./styles";

export const Notification = () => {
  const classes = useNotificationStyles();
  const { notification } = useContext(RestaurantContext);

  return <div className={classes.root}></div>;
};
