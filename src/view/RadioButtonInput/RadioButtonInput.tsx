import { RadioButtonInput } from "../../io";
import { Wrapper } from "../../core";
import { useRadioButtonStyles } from "./styles";

export const RadioButtonView = () => {
  const classes = useRadioButtonStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        className={classes.wrapper}
        title="Radio Input"
        description="A radio button is a form element that allows the user to select one option from a
              range of options."
      >
        <div className={classes.inputs}>
          <RadioButtonInput name="radio" label="LABEL" />
        </div>
      </Wrapper>
    </div>
  );
};
