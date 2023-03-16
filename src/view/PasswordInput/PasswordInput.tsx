import { FC, useState } from "react";
import { BsEye } from "react-icons/bs";

import { TextInput } from "../../io";
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
    // {
    //   name: "TextInput",
    //   label: "Active",
    //   placeholder: "Placeholder",
    //   helperText: "",
    //   isSuccess: true,
    // },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Password Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              Password inputs enable users to enter or create passwords in a form.
            </p>
          </div>
        </div>
        <Wrapper className={classes.wrapper}>
          <div className={classes.inputs}>
            {inputData.map((item: InputDataProps, index) => (
              <TextInput
                key={item.name}
                id={`${item.label}-${index + Math.random()}`}
                type="password"
                className={classes.input}
                label={item.label}
                rightIcon={<BsEye />}
                placeholder={item.placeholder}
                isError={item.isError}
                isSuccess={item.isSuccess}
                helperText={item.helperText}
                passwordRules={{
                  min: {
                    limit: 8,
                  },
                }}
                value={value}
                onChange={handleChange}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
