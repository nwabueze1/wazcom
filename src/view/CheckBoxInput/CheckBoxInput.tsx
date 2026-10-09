import { useState } from "react";
import { CheckBoxInput } from "../../io";
import { ViewHeader, Wrapper } from "../../core";
import { useCheckBoxInputStyles } from "./styles";
import { Paper } from "../../core/Paper";
import { useCheckboxInputProps } from "./data";
import { ComponentProps } from "../../core/ComponentProps";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const CheckBoxInputView = () => {
  const classes = useCheckBoxInputStyles();
  const { data, state, onReset } = useCheckboxInputProps();

  const renderConfig = () => (
    <>
      <Paper>
        <CheckBoxInput {...state} />
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  const renderValues = () => (
    <Paper>
      <div className={classes.row}>
        <CheckBoxInput value={true} label={"Checked"} />
        <CheckBoxInput value={false} label={"Unchecked"} />
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title="CheckBox Input"
        description="The checkbox is used to collect predefined value or set of values from the provided set."
      ></Wrapper>
      <ViewHeader configChildren={renderConfig()} statesChildren={renderValues()} />
    </div>
  );
};
