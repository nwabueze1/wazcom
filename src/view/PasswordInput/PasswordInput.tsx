import { FC, useState } from "react";
import { Wrapper } from "../../core";
import { usePasswordInputStyles } from "./styles";
import { TextInputViewProps, InputDataProps } from "./types";

export const PasswordInputView: FC<TextInputViewProps> = () => {
  const [value, setValue] = useState("");

  const handleChange = (payload: { name: string; value: string }) => {
    setValue(payload?.value);
  };

  const classes = usePasswordInputStyles();

  const inputData: InputDataProps[] = [
    { name: "TextInput", label: "Password", placeholder: "Enter password", helperText: "" },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Wrapper
          className={classes.wrapper}
          title="Password Input"
          description=" Password inputs enable users to enter or create passwords in a form."
        >
          <div className={classes.inputs}></div>
        </Wrapper>
      </div>
    </div>
  );
};
