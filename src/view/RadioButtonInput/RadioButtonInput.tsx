import { RadioButtonInput } from "../../io";
import { ViewHeader, Wrapper } from "../../core";
import { useRadioButtonStyles } from "./styles";
import { Paper } from "../../core/Paper";
import { useRadioButtonProps } from "./data";
import { ComponentProps } from "../../core/ComponentProps";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const RadioButtonView = () => {
  const classes = useRadioButtonStyles();
  const { data, onReset, state } = useRadioButtonProps();

  const renderConfig = () => (
    <>
      <Paper>
        <RadioButtonInput {...state} />
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  const renderStates = () => (
    <Paper>
      <div className={classes.radioContainer}>
        <RadioButtonInput value={true} label={"Selected"} />
        <RadioButtonInput value={false} label={"Not selected"} />
        <RadioButtonInput value={true} label={"Disabled Selected"} isDisabled />
        <RadioButtonInput value={false} label={"Not selected"} isDisabled />
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title="Radio Input"
        description="A radio button is a form element that allows the user to select one option from a
              range of options."
      ></Wrapper>
      <ViewHeader configChildren={renderConfig()} statesChildren={renderStates()} />
    </div>
  );
};
