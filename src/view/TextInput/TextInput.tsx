import { FC } from "react";
import { BsEye } from "react-icons/bs";
import CssBaseline from "@mui/material/CssBaseline";
import { TextInput } from "../../io";
import { ViewHeader, Wrapper } from "../../core";
import { useTextInputStyles } from "./styles";
import { TextInputViewProps, InputDataProps } from "./types";
import { ComponentProps } from "../../core/ComponentProps";
import { useTextInputProps } from "./utils/useTextInputProps";
import { Paper } from "../../core/Paper";
import { ComponentPropsType } from "../../core/ComponentProps/types";

export const TextInputView: FC<TextInputViewProps> = () => {
  const { data, onReset, state } = useTextInputProps();

  const handleEnter = (payload: any) => {
    console.log("onEnter", payload);
  };
  const handleFocus = (payload: any) => {
    console.log("onFocus", payload);
  };
  const handleBlur = (payload: any) => {
    console.log("onBlur", payload);
  };

  const classes = useTextInputStyles();

  const inputData: { default: InputDataProps[]; validation: InputDataProps[] } = {
    default: [
      { name: "TextInput", label: "Default", placeholder: "Placeholder", helperText: "" },
      {
        name: "TextInput",
        label: "Hover",
        placeholder: "Placeholder",
        helperText: "",
      },
      {
        name: "TextInput",
        label: "Active",
        placeholder: "Placeholder",
        helperText: "",
        isSuccess: true,
      },
    ],
    validation: [
      {
        name: "TextInput",
        label: "Error",
        placeholder: "Placeholder",
        helperText: "Error Message",
        isError: true,
      },
      {
        name: "TextInput",
        label: "Success",
        placeholder: "Placeholder",
        helperText: "Success Message",
        isSuccess: true,
      },
    ],
  };

  const renderConfig = () => (
    <>
      <Paper>
        <TextInput
          className={classes.input}
          label={state.label}
          placeholder={state.placeholder}
          isError={state.isError}
          isSuccess={state.isSuccess}
          required={state.required}
          helperText={state.helperText}
          value={state.value ? state.value : undefined}
          leftIcon={state.leftIcon && <BsEye />}
          rightIcon={state.rightIcon && <BsEye />}
        />
      </Paper>
      <ComponentProps body={data as ComponentPropsType[]} onReset={onReset} />
    </>
  );

  const renderValidations = () =>
    inputData.validation.map((validationConfig, index) => (
      <TextInput className={classes.input} key={index} {...validationConfig} errors={[]} />
    ));

  const renderDefaultState = () =>
    inputData.default.map((item: InputDataProps, index) => (
      <TextInput
        key={item.name}
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
    ));

  const renderStates = () => (
    <>
      <Paper>
        <h4 className={classes.cardTitle}> Basic </h4>
        <div className={classes.inputs}>{renderDefaultState()}</div>
      </Paper>
      <Wrapper className={classes.wrapper}>
        <Paper>
          <h4 className={classes.cardTitle}>Validation </h4>
          <div className={classes.inputs}>{renderValidations()}</div>
        </Paper>
      </Wrapper>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Wrapper
        title="Text Input"
        description="Text inputs enable users to enter free-form text data. The type of text field used
              should reflect the length of the content you expect the user to enter. The default
              text input is for short, one-line content, whereas text area is for longer, multi-line
              entries."
        className={classes.wrapper}
      />
      <ViewHeader configChildren={renderConfig()} statesChildren={renderStates()} />
    </div>
  );
};
