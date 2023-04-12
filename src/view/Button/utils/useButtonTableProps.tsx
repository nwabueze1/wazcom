import { Button, CheckBoxInput, TextInput } from "../../../build";
import { IComponentProps } from "core/ComponentProps/types";
import { useEffect, useState } from "react";

interface IIntitialState {
  isDisabled: boolean;
  isLoading: boolean;
  variant: "contained" | "outlined" | "text";
  value: string;
  leftIcon: boolean;
  rightIcon: boolean;
  height: number;
  width: number;
}

const initialstate: IIntitialState = {
  isDisabled: false,
  isLoading: false,
  variant: "contained",
  value: "Default Button",
  leftIcon: false,
  rightIcon: false,
  height: 10,
  width: 10,
};

interface IEvent {
  name: string;
  value: string | boolean;
}
const useButtonProps = () => {
  const [state, setState] = useState<IIntitialState>(initialstate);
  const [name, setName] = useState("");

  const handleChange = (e: IEvent, name: string) => setState({ ...state });

  const data: IComponentProps[] = [
    {
      name: "children",
      description: "The content of the component.",
      default: "undefined",
      controls: (
        <TextInput type={"text"} disabled onChange={(e) => console.log(e)} value={""} height={18} />
      ),
    },
    {
      name: "isDisabled",
      description: "This prop is used to disable or enable the button",
      default: "false",
      controls: (
        <CheckBoxInput
          value={state.isDisabled}
          onChange={(e) => setState({ ...state, isDisabled: !state.isDisabled })}
          sx={{ borderColor: "#E7F1E9", bgcolor: "#FAFAFA" }}
        />
      ),
    },
    {
      name: "isLoading",
      description: "This prop is used to control the loading state of the button.",
      default: "false",
      controls: (
        <CheckBoxInput
          value={state.isLoading}
          onChange={(e) => setState({ ...state, isLoading: !state.isLoading })}
        />
      ),
    },
    {
      name: "height",
      description: "This is useed to set the height of the button",
      default: "auto",
      controls: (
        <TextInput
          type={"number"}
          value={18}
          onChange={(e) => handleChange(e, "height")}
          height={18}
          disabled
        />
      ),
    },
    {
      name: "width",
      description: "This is used to set the width of the button",
      default: "auto",
      controls: (
        <TextInput
          type={"text"}
          value={"auto"}
          onChange={(e) => console.log(e)}
          height={18}
          disabled
        />
      ),
    },
    {
      name: "leftIcon",
      description: "This prop is used to insert an Element before the children",
      default: "undefined",
      controls: (
        <CheckBoxInput
          value={state.leftIcon}
          onChange={(e) => setState({ ...state, leftIcon: !state.leftIcon })}
        />
      ),
    },
    {
      name: "rightIcon",
      description: "This prop is used to insert an Elemet after the children",
      default: "undefined",
      controls: (
        <CheckBoxInput
          value={state.rightIcon}
          onChange={(e) => setState({ ...state, rightIcon: !state.rightIcon })}
        />
      ),
    },
    {
      name: "variant",
      description: "This prop is used to change the variations of the button. ",
      default: "contained",
    },
    {
      name: "onClick",
      description: "This is the function that get's triggered when the button is clicked.",
      default: "()=>void",
      controls: (
        <Button size={"sm"} onClick={() => alert("button clicked")} variant="outlined">
          click me
        </Button>
      ),
    },
  ];

  useEffect(() => {
    return () => {};
  }, [state.value]);

  return {
    ...state,
    data,
    onReset: () => setState(initialstate),
  };
};

export default useButtonProps;
