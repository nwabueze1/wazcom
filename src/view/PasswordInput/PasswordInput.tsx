import { FC } from "react";
import { Wrapper } from "../../core";
import { usePasswordInputStyles } from "./styles";
import { TextInputViewProps } from "./types";

export const PasswordInputView: FC<TextInputViewProps> = () => {
  const classes = usePasswordInputStyles();

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
