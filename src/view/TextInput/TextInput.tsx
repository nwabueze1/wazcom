import { FC } from "react";
import { BsEye } from "react-icons/bs";
import CssBaseline from "@mui/material/CssBaseline";
import { TextInput } from "../../io";
import { TimeInput } from "../../io";
import { Wrapper } from "../../core";
import { useTextInputStyles } from "./styles";
import { TextInputViewProps, InputDataProps } from "./types";
import { ComponentProps } from "../../core/ComponentProps";
import { useTextInputProps } from "./utils/useTextInputProps";
import { Paper } from "../../core/Paper";

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

      { name: "TextInput", label: "Hover", placeholder: "Placeholder", helperText: "" },
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
      >
        <Paper>
          <TimeInput />
          <h4 className={classes.cardTitle}> Basic </h4>
          <div className={classes.inputs}>
            {inputData.default.map((item: InputDataProps, index) => (
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
            ))}
          </div>
        </Paper>
      </Wrapper>

      <Wrapper className={classes.wrapper}>
        <Paper>
          <h4 className={classes.cardTitle}>Validation </h4>
          <div className={classes.inputs}>
            {inputData.validation.map((item: InputDataProps, index) => (
              <TextInput
                key={item.name}
                id={`${item.label}-${index + Math.random()}`}
                className={classes.input}
                label={item.label}
                placeholder={item.placeholder}
                helperText={state.helperText}
                isError={state.isError}
                isSuccess={state.isSuccess}
                onEnter={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
                rightIcon={state.rightIcon ? <BsEye width={16} /> : undefined}
                leftIcon={state.leftIcon ? <BsEye width={16} /> : undefined}
                value={state.name}
                required={state.required}
              />
            ))}
          </div>
        </Paper>
      </Wrapper>
      <ComponentProps body={data as any} onReset={onReset} />
    </div>
  );
};
