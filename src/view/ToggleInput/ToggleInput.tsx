import { useState } from "react";
import { ToggleInput } from "../../io";
import { Wrapper } from "../../core";
import { useToggleInputStyles } from "./styles";

export const ToggleInputView = () => {
  const [, setValue] = useState(false);
  const classes = useToggleInputStyles();

  const handleChange = (payload: { name: string; value: boolean }) => {
    setValue(payload?.value);
  };

  return (
    <div className={classes.root}>
      <Wrapper
        title="Toggle Input"
        description="A Toggle allows the user to choose one of two values, representing on or off. A Toggle is a specialised form of Checkbox."
      >
        <ToggleInput onChange={handleChange} />
      </Wrapper>
    </div>
  );
};
