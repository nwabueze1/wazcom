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
      <Wrapper
        title="CheckBox Input"
        description="The currency input is used to collect currency types and amount from users"
      >
        <CheckBoxInput label="Label" onChange={handleChange} name="checkbox" checked={value} />
      </Wrapper>
    </div>
  );
};
