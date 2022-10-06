import { useDateStyles } from "./styles";
import { BsCalendarDate } from "react-icons/bs"

export const Date = () => {
    const classes = useDateStyles();
    return (
        <div className={classes.root} >
            <p className={classes.dateText}>
                Month, day, year
            </p>
            <BsCalendarDate className={classes.dateIcon} />
        </div>
    );
};
