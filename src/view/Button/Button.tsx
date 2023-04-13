import ComponentProps from "core/ComponentProps/ComponentProps";
import { FC, useState } from "react";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";
import ButtonPropsContext, {
  IIntitialState,
  initialButtonProp,
} from "./utils/ButtonComponentContext";
import useButtonPropsData from "./utils/useButtonTableProps";

export const ButtonView: FC<ButtonViewProps> = () => {
  const [state, setState] = useState<Omit<IIntitialState, "onChange">>(initialButtonProp);
  const { data } = useButtonPropsData();
  const classes = useButtonStyles();

  const handleChange = (e: { name: string; value: string }) => {
    console.log(e);
  };
  const handleReset = () => setState(initialButtonProp);

  return (
    <ButtonPropsContext.Provider value={{ ...state, onChange: handleChange }}>
      <div className={classes.root}>
        <Wrapper
          title="Buttons"
          description="Buttons are clickable elements that are used to trigger actions. They communicate
              calls to action to the user and allow users to interact with pages in a variety of
              ways. Button labels express what action will occur when the user interacts with it."
        >
          <Button variant={"contained"} isDisabled={false} isLoading={false} rightIcon={undefined}>
            Default Button
          </Button>
        </Wrapper>
        <Wrapper defaultPadding={false} maxWidth={1150}>
          <ComponentProps body={data} />
        </Wrapper>
      </div>
    </ButtonPropsContext.Provider>
  );
};
