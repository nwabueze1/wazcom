import ComponentProps from "core/ComponentProps/ComponentProps";
import ComponentPropsWrapper from "core/ComponentProps/components/Wrapper";
import { FC, useEffect } from "react";
import { BiReset } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";
import useButtonPropsData from "./utils/useButtonTableProps";

export const ButtonView: FC<ButtonViewProps> = () => {
  const { data, state, handleReset } = useButtonPropsData();
  const classes = useButtonStyles();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Buttons"
        description="Buttons are clickable elements that are used to trigger actions. They communicate
              calls to action to the user and allow users to interact with pages in a variety of
              ways. Button labels express what action will occur when the user interacts with it."
      >
        <Button
          variant={"contained"}
          isDisabled={state.isDisabled}
          isLoading={state.isLoading}
          rightIcon={state.rightIcon ? <BiReset size={12} /> : undefined}
          leftIcon={state.leftIcon ? <BiReset size={12} /> : undefined}
          iconSpacing={5}
        >
          {state.children}
        </Button>
      </Wrapper>
      <ComponentPropsWrapper maxWidth={1149}>
        <ComponentProps body={data} onReset={handleReset} />
      </ComponentPropsWrapper>
    </div>
  );
};
