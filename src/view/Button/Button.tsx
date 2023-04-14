import { TextField } from "@mui/material";
import ComponentProps from "core/ComponentProps/ComponentProps";
import ComponentPropsWraper from "core/ComponentProps/components/Wrapper";
import { FC } from "react";
import { Button, Wrapper } from "../../core";
import { useButtonStyles } from "./styles";
import { ButtonViewProps } from "./types";

export const ButtonView: FC<ButtonViewProps> = () => {
  const classes = useButtonStyles();
  const onChange = (e: { name: string; value: number | string | boolean }) => {
    console.log(e);
  };

  return (
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
      <ComponentPropsWraper maxWidth={1149}>
        <ComponentProps
          body={[
            {
              name: "Label",
              description: "Input label on the top left (String)",
              default: "Default",
              controls: {
                name: "label",
                onChange: onChange,
                controlType: "checkbox",
              },
            },
            {
              name: "Label",
              description: "Input label on the top left (String)",
              default: "Default",
              controls: {
                name: "label",
                onChange: onChange,
                controlType: "string",
              },
            },
            {
              name: "Label",
              description: "Input label on the top left (String)",
              default: "Default",
              controls: {
                name: "label",
                onChange: onChange,
                controlType: "string",
              },
            },
          ]}
        />
      </ComponentPropsWraper>
    </div>
  );
};
