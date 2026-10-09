import { useState } from "react";
import { ToggleInput } from "../../io";
import { ViewHeader, Wrapper } from "../../core";
import { useToggleInputStyles } from "./styles";
import { useToggleInputProp } from "./data";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";
import { ComponentPropsType } from "../../core/ComponentProps/types";

type StatesType = "checked" | "unChecked";
export const ToggleInputView = () => {
  const [, setValue] = useState(false);
  const classes = useToggleInputStyles();
  const { data, state, onReset } = useToggleInputProp();
  const [states, setStates] = useState<Record<StatesType, boolean>>({
    checked: true,
    unChecked: false,
  });

  const handleChange = (payload: { name: string; value: boolean }) => {
    setValue(payload?.value);
  };

  const handleStatesChange = (e: { name: string; value: boolean }) => {
    setStates({ ...states, [e.name as StatesType]: e.value });
  };

  const renderConfigurations = () => (
    <>
      <Paper>
        <ToggleInput {...state} value={state.value || undefined} />
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  const renderStates = () => (
    <Paper>
      <div className={classes.toggleContainer}>
        <ToggleInput
          label={"active toggle"}
          name={"checked"}
          value={states.checked}
          onChange={handleStatesChange}
        />
        <ToggleInput
          label={"inactive toggle"}
          name={"unChecked"}
          value={states.unChecked}
          onChange={handleStatesChange}
        />
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title="Toggle Input"
        description="A Toggle allows the user to choose one of two values, representing on or off. A Toggle is a specialised form of Checkbox."
      ></Wrapper>
      <ViewHeader configChildren={renderConfigurations()} statesChildren={renderStates()} />{" "}
    </div>
  );
};
