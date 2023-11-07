import { CssBaseline } from "@mui/material";
import { PasswordInput } from "../../io";
import { FC } from "react";
import { Wrapper } from "../../core";
import { usePasswordInputStyles } from "./styles";
import { TextInputViewProps } from "./types";
import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";
import { usePasswordInputData } from "./utils/usePasswordInputData";

export const PasswordInputView: FC<TextInputViewProps> = () => {
  const { data, state, handleReset } = usePasswordInputData();
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
          <Paper>
            <div className={classes.inputs}>
              <PasswordInput
                isError={state.isError}
                isSuccess={state.isSuccess}
                hideLabel={state.hideLabel}
                required={state.required}
                config={{
                  length: {
                    limit: 12,
                  },
                }}
              />
            </div>
          </Paper>
        </Wrapper>
        <ComponentProps body={data as any} onReset={handleReset} />
      </div>
    </div>
  );
};
