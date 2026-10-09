import { FC, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { TextArea } from "../../io";
import { useTextInputStyles } from "./styles";
import { TextAreaViewProps, InputDataProps } from "./types";
import { useTextAreaProps } from "./data";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";
import { ComponentPropsType } from "../../core/ComponentProps/types";
import { ViewHeader } from "../../core";

export const TextAreaView: FC<TextAreaViewProps> = () => {
  const [value, setValue] = useState<string>();
  const { data, onReset, state } = useTextAreaProps();
  const handleEnter = (payload: any) => {
    console.log("onEnter", payload);
  };
  const handleFocus = (payload: any) => {
    console.log("onFocus", payload);
  };
  const handleBlur = (payload: any) => {
    console.log("onBlur", payload);
  };

  const handleChange = (payload: any) => {
    console.log("VALUE", payload);
    setValue(payload.value);
  };

  const classes = useTextInputStyles();

  const inputData: InputDataProps[] = [
    { name: "TextInput", label: "Default", placeholder: "TextArea", helperText: "" },
    { name: "TextInput", label: "Hover", placeholder: "TextArea", helperText: "" },
    {
      name: "TextInput",
      label: "Active",
      placeholder: "TextArea",
      helperText: "",
      isSuccess: true,
    },
    {
      name: "TextInput",
      label: "Error",
      placeholder: "TextArea",
      helperText: "Error Message",
      isError: true,
    },
    {
      name: "TextInput",
      label: "Success",
      placeholder: "TextArea",
      helperText: "Success Message",
      isSuccess: true,
    },
  ];

  const renderConfig = () => (
    <>
      <Paper>
        <TextArea className={classes.textArea} {...state} value={state.value || undefined} />
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  const renderStates = () => (
    <div className={classes.statesContainer}>
      <div className={classes.inputContainer}>
        <div className={classes.sections}>
          <h1 className={classes.inputsHeader}>Without Text Counter</h1>
          <div className={classes.inputs}>
            {inputData.map((item: InputDataProps, index) => (
              <TextArea
                key={`${item.label}-${index + Math.random()}`}
                id={`${item.label}-${index + Math.random()}`}
                className={classes.input}
                label={item.label}
                placeholder={item.placeholder}
                isError={item.isError}
                isSuccess={item.isSuccess}
                helperText={item.helperText}
                onEnter={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.sections}>
          <h1 className={classes.inputsHeader}>Without Text Counter</h1>
          <div className={classes.inputs}>
            {inputData.map((item: InputDataProps, index) => (
              <TextArea
                key={`${item.label}-${index + Math.random()}`}
                id={`${item.label}-${index + Math.random()}`}
                className={classes.input}
                label={item.label}
                placeholder={item.placeholder}
                helperText={item.helperText}
                isError={item.isError}
                isSuccess={item.isSuccess}
                onEnter={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                showCC={true}
                value={value || undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>TextArea Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              The textarea element represents a multi-line plain-text editing control, useful when
              you want to allow users to enter a sizeable amount of free-form text, for example a
              comment on a review or feedback form.
            </p>
          </div>
        </div>
        <ViewHeader configChildren={renderConfig()} statesChildren={renderStates()} />
      </div>
    </div>
  );
};
