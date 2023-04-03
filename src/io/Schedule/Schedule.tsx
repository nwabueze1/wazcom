import { TimeInput, ToggleInput } from "../";
import { MultiSelect } from "core/MultiSelect";
import { useScheduleStyles } from "./styles";
import { FC, useState } from "react";
import { ScheduleProps } from "./types";
import clx from "classnames";

export const Schedule: FC<ScheduleProps> = ({ className, onChange }) => {
  const classes = useScheduleStyles();
  const [scheduleValue, setScheduleValue] = useState({
    multiDays: {},
    from: "",
    to: "",
    repeat: false,
  });

  const handleChange = ({ name, value }: { name: string; value: any }) => {
    setScheduleValue({ ...scheduleValue, [name]: value });

    if (!onChange) return;
    onChange({ ...scheduleValue, [name]: value });
  };

  return (
    <div className={clx(classes.root, className)}>
      <MultiSelect
        className={classes.multiSelect}
        name="multiDays"
        onChange={({ name, value }) => {
          handleChange({ name, value });
        }}
      />
      <div className={classes.time}>
        <TimeInput
          name="from"
          onChange={({ name, value }) => {
            handleChange({ name, value });
          }}
        />
      </div>
      <div className={classes.to}>To</div>
      <div className={classes.time}>
        <TimeInput
          name="to"
          onChange={({ name, value }) => {
            handleChange({ name, value });
          }}
        />
      </div>
      <div className={classes.toggle}>
        <p>Repeat</p>
        <ToggleInput
          name="repeat"
          onChange={({ name, value }) => {
            handleChange({ name, value });
          }}
        />
      </div>
    </div>
  );
};
