import ComponentProps from "core/ComponentProps/ComponentProps";
import { FC } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";
import useButtonProps from "./utils/useButtonTableProps";

export const ButtonView: FC<ButtonViewProps> = () => {
  const classes = useButtonStyles();
  const { isDisabled, isLoading, variant, data, onReset, value, leftIcon, rightIcon } =
    useButtonProps();

  return (
    <div className={classes.root}>
      <Wrapper
        title="Buttons"
        description="Buttons are clickable elements that are used to trigger actions. They communicate
              calls to action to the user and allow users to interact with pages in a variety of
              ways. Button labels express what action will occur when the user interacts with it."
      >
        <Button
          iconSpacing={5}
          leftIcon={leftIcon && ((<FiCheckCircle />) as any)}
          variant={variant}
          isDisabled={isDisabled}
          isLoading={isLoading}
          rightIcon={rightIcon && ((<FiCheckCircle />) as any)}
        >
          {value}
        </Button>
      </Wrapper>
      <ComponentProps onReset={onReset} body={data} />
    </div>
  );
};
