import { RadioButtonInput } from "../../io";
import { Wrapper } from "../../core";
import { useRadioButtonStyles } from "./styles";

export const RadioButtonView = () => {
  const classes = useRadioButtonStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Radio Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              A radio button is a form element that allows the user to select one option from a
              range of options
            </p>
          </div>
        </div>
        <Wrapper className={classes.wrapper}>
          <div className={classes.inputs}>
            <RadioButtonInput name="radio" />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
