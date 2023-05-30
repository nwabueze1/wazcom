import { Paper } from "../../core/Paper";
import { ComponentProps } from "../../core/ComponentProps";
import { FC } from "react";
import { BiReset } from "react-icons/bi";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";
import useButtonComponentProps from "./utils/useButtonComponentProps";

export const ButtonView: FC<ButtonViewProps> = () => {
  const { data, state, handleReset } = useButtonComponentProps();
  const classes = useButtonStyles();

  const showIcon = (display: boolean) => (display ? <BiReset size={12} /> : undefined);

  return (
    <div className={classes.root}>
      <Wrapper
        title="Buttons"
        description="Buttons are clickable elements that are used to trigger actions. They communicate
              calls to action to the user and allow users to interact with pages in a variety of
              ways. Button labels express what action will occur when the user interacts with it."
      >
        <Paper>
          <Button
            variant={"contained"}
            isDisabled={state.isDisabled}
            iconSpacing={2}
            isLoading={state.isLoading}
            rightIcon={showIcon(state.rightIcon)}
            leftIcon={showIcon(state.leftIcon)}
            height={state.height > 10 ? `${state.height}px` : undefined}
          >
            {state.children}
          </Button>
        </Paper>
        <ComponentProps body={data as any} onReset={handleReset} />
      </Wrapper>
    </div>
  );
};
