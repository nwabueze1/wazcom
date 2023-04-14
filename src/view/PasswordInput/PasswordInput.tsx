import { CssBaseline } from "@mui/material";
import { PasswordInput } from "../../io";
import { FC } from "react";
import { Wrapper } from "../../core";
import { usePasswordInputStyles } from "./styles";
import { TextInputViewProps } from "./types";

export const PasswordInputView: FC<TextInputViewProps> = () => {
  const classes = usePasswordInputStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        <Wrapper
          className={classes.wrapper}
          title="Password Input"
          description="Password inputs enable users to enter or create passwords in a form."
        >
          <div className={classes.inputs}>
            <PasswordInput
              config={{
                length: {
                  limit: 12,
                },
              }}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};
