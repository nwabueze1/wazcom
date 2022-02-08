import classNames from "classnames";
import { Button } from "core";
import { useReservationStyles } from "./styles";

export const Reservation = () => {
  const classes = useReservationStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <p className={classes.reservation}>Reserve a Table</p>
        <div className={classes.input}>
          <input type="date" className={classes.dateInput} />
          <input type="time" className={classes.dateInput} />
        </div>
        <Button className={classes.btn}>Book Now</Button>
      </div>
    </div>
  );
};
