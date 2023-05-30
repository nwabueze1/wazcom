import { DateInput, DateTimeScheduler, TimeInput } from "../../io";
import { Wrapper } from "../../core";
import { PickersStyles } from "./style";
import { CssBaseline } from "@mui/material";

export const PickersView = () => {
  const classes = PickersStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Wrapper
        title="Time/Date input"
        description="Pickers provide a simple way to select a single value from a pre-determined set."
        showBody={false}
      />
      <br />
      <br />
      <h4 className={classes.title}> Time Picker </h4>
      <Wrapper showHeader={false}>
        <TimeInput name="time" />
      </Wrapper>
      <br />
      <br />
      <h4 className={classes.title}> Date Picker </h4>
      <Wrapper showHeader={false}>
        <DateInput name="date" />
      </Wrapper>
      <br />
      <br />
      <h4 className={classes.title}> Schedule </h4>
      <Wrapper showHeader={false}>
        <DateTimeScheduler />
      </Wrapper>
    </div>
  );
};
