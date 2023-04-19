import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { EmailInput } from "../../io";
import { useEmailInputStyles } from "./styles";
import { EmailInputViewProps, InputDataProps } from "./types";
import { useEmailInputProps } from "./utils/useEmailInputProps";
import { ComponentProps } from "../../core/ComponentProps";
import { Paper } from "../../core/Paper";

export const EmailInputView: FC<EmailInputViewProps> = () => {
  const { data, state, onReset } = useEmailInputProps();
  const classes = useEmailInputStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Email Input</h1>
          <div className={classes.description}>
            <p className={classes.descriptionText}>
              Email inputs enable users to enter email addresses with email validation. The email
              field should reflect the email with a validation and should reflect the length of the
              content you expect the user to enter.
            </p>
          </div>
        </div>
        <Paper padding={10}>
          <div className={classes.inputContainer}>
            <EmailInput
              value={state.name}
              placeholder="enter a valid email address"
              isError={state.isError}
              isSuccess={state.isSuccess}
            />
          </div>
        </Paper>

        <ComponentProps body={data as any} onReset={onReset} />
      </div>
    </div>
  );
};
