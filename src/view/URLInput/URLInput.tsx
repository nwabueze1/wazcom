import { FC } from "react";
import { FiLink } from "react-icons/fi";
import { URLInput } from "../../io";

import { useURLInputStyles } from "./styles";
import { URLInputViewProps, InputDataProps } from "./types";

export const URLInputView: FC<URLInputViewProps> = () => {
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

  const inputData: InputDataProps[] = [
    { name: "TextInput", label: "Default", placeholder: "Placeholder", helperText: "" },
    { name: "TextInput", label: "Hover", placeholder: "Placeholder", helperText: "" },
    {
      name: "TextInput",
      label: "Active",
      placeholder: "Placeholder",
      helperText: "",
      isSuccess: true,
    },
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
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>URL Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              URL inputs enable users to enter url addresses with url validation. The url field
              should reflect the url with a validation.
            </p>
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputs}>
            {inputData.map((item: InputDataProps, index) => (
              <URLInput
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
        </div>
      </div>
    </div>
  );
};
