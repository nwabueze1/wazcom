import { FC } from "react";
import { FiLink } from "react-icons/fi";
import CssBaseline from "@mui/material/CssBaseline";
import { URLInput } from "../../io";
import { Wrapper } from "../../core";

import { useURLInputStyles } from "./styles";
import { URLInputViewProps, InputDataProps } from "./types";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";
import { useUrlInputData } from "./utils/useUrlInputData";

export const URLInputView: FC<URLInputViewProps> = () => {
  const { data, state, handleReset } = useUrlInputData();

  const handleEnter = (payload: any) => {
    console.log("onEnter", payload);
  };
  const handleFocus = (payload: any) => {
    console.log("onFocus", payload);
  };
  const handleBlur = (payload: any) => {
    console.log("onBlur", payload);
  };

  const classes = useURLInputStyles();

  const inputData: { basic: InputDataProps[]; validation: InputDataProps[] } = {
    basic: [
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
        title="URL Input"
        description="URL inputs enable users to enter url addresses with url validation. The url field
              should reflect the url with a validation."
      >
        <Paper padding={20}>
          <h4 className={classes.cardTitle}> Basic </h4>
          <div className={classes.inputs}>
            {inputData.basic.map((item: InputDataProps, index) => (
              <URLInput
                key={item.label}
                id={`${item.label}-${index + Math.random()}`}
                className={classes.input}
                label={item.label}
                placeholder={item.placeholder}
                helperText={item.helperText}
                isError={item.isError}
                isSuccess={item.isSuccess}
                leftIcon={<FiLink width={16} />}
                iconSpacing={2}
                onEnter={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}
          </div>
        </Paper>
        <Paper padding={20}>
          <h4 className={classes.cardTitle}> Validation </h4>
          <div className={classes.inputs}>
            {inputData.validation.map((item: InputDataProps, index) => (
              <URLInput
                key={item.label}
                id={`${item.label}-${index + Math.random()}`}
                className={classes.input}
                label={item.label}
                placeholder={item.placeholder}
                helperText={item.helperText}
                isError={state.isError}
                isSuccess={state.isSuccess}
                leftIcon={<FiLink width={16} />}
                iconSpacing={2}
                onEnter={handleEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}
          </div>
        </Paper>
        <ComponentProps body={data as any} onReset={handleReset} />
      </Wrapper>
    </div>
  );
};
