import { useTimeStyles } from "./styles";
import { BiTime } from "react-icons/bi";

export const Time = () => {
  const classes = useTimeStyles();
  return (
    <div className={classes.root}>
      <p className={classes.timeText}>Time</p>
      <BiTime className={classes.timeIcon} />
    </div>
  );
};
