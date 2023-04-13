import { FC, useState } from "react";
import { BsEye } from "react-icons/bs";
import CssBaseline from "@mui/material/CssBaseline";
import { TextInput } from "../../io";
import { Wrapper } from "../../core";
import { useTextInputStyles } from "./styles";
import { TextInputViewProps, InputDataProps, TextInputContextDataType } from "./types";
import { initialTextInputState, TextInputContext } from "./utils/TextInputContext";
import ComponentProps from "core/ComponentProps/ComponentProps";
import { useTextInputProps } from "./utils/useTextInputTableProps";

export const TextInputView: FC<TextInputViewProps> = () => {
  const [state, setState] = useState(initialTextInputState);
  const { data } = useTextInputProps();

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
    <TextInputContext.Provider
      value={{
        ...state,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onEnter: handleEnter,
        onChange: handleChange,
      }}
    >
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
          <div>
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
          </div>
        </Wrapper>

        <Wrapper className={classes.wrapper}>
          <div>
            <h4 className={classes.cardTitle}>Validation </h4>
            <div className={classes.inputs}>
              {inputData.validation.map((item: InputDataProps, index) => (
                <TextInput
                  key={item.name}
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
                  rightIcon={<BsEye width={16} />}
                />
              ))}
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <ComponentProps body={data} />
        </Wrapper>
      </div>
    </TextInputContext.Provider>
  );
};
