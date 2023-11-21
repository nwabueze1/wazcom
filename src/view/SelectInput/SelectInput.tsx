import { FC, useState, useCallback } from "react";
import { SelectInput } from "../../io";

import { useSelectInputStyles } from "./styles";
import { SelectInputViewProps } from "./types";
import { useSelectInputData } from "./data";
import { ViewHeader, Wrapper } from "../../core";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";

export const SelectInputView: FC<SelectInputViewProps> = () => {
  const { data, state, onReset } = useSelectInputData();
  const classes = useSelectInputStyles();
  const selectOptions = [
    { label: "Label", value: "Value" },
    { label: "Label 2", value: "Value 2" },
  ];

  const selectInputStates = [
    {
      label: "Default",
      options: selectOptions,
    },
    {
      label: "Success",
      options: selectOptions,
      isSuccess: true,
    },
    {
      label: "Error",
      options: selectOptions,
      isError: true,
    },
  ];

  const renderConfigurations = () => (
    <>
      <Paper>
        <SelectInput {...state} />
      </Paper>
      <ComponentProps body={data} onReset={onReset} />
    </>
  );

  const renderStates = () => (
    <Paper>
      <div className={classes.selectInputContainer}>
        {selectInputStates.map((state, index) => (
          <SelectInput {...state} key={index} />
        ))}
      </div>
    </Paper>
  );

  return (
    <div className={classes.root}>
      <Wrapper
        title={"Select Input"}
        description={`
      Select inputs enable users to to create drop-down menus so that users can select the value they want. The select input element is most often used in a form, to collect user input.
      `}
      />
      <ViewHeader configChildren={renderConfigurations()} statesChildren={renderStates()} />
    </div>
  );
};
