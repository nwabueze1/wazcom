import { useState } from "react";

import { CheckBoxInput } from "../../io";
import { Wrapper } from "../../core";
import { useCheckBoxInputStyles } from "./styles";

export const CheckBoxInputView = () => {
  const [value, setValue] = useState(false);
  const classes = useCheckBoxInputStyles();

  const handleChange = (payload: { name: string; value: boolean }) => {
    setValue(payload?.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>CheckBox Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              The currency input is used to collect currency types and amount from users
            </p>
          </div>
        </div>
        <Wrapper className={classes.wrapper}>
          <div className={classes.inputs}>
            <CheckBoxInput label="Label" onChange={handleChange} name="checkbox" checked={value} />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
