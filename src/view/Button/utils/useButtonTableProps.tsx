import { Button, CheckBoxInput, TextInput } from "../../../build";
import { IComponentProps } from "core/ComponentProps/types";
import { useState } from "react";

interface IIntitialState {
  isDisabled: boolean;
  isLoading: boolean;
  variant: "contained" | "outlined" | "text";
  value: string;
  leftIcon: boolean;
  rightIcon: boolean;
  height: number;
  width: number;
  title: string;
}

const initialstate: IIntitialState = {
  isDisabled: false,
  isLoading: false,
  variant: "contained",
  value: "",
  leftIcon: false,
  rightIcon: false,
  height: 10,
  width: 10,
  title: "",
};

interface IEvent {
  name: string;
  value: string | boolean;
}
const useButtonProps = () => {
  const [state, setState] = useState<IIntitialState>(initialstate);

  const data: IComponentProps[] = [
    {
      name: "isDisabled",
      description: "This prop is used to disable or enable the button",
      default: "false",
      controls: (
        <CheckBoxInput
          value={state.isDisabled}
          onChange={() => setState({ ...state, isDisabled: !state.isDisabled })}
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
          onChange={() => setState({ ...state, isLoading: !state.isLoading })}
        />
      ),
    },
    {
      name: "children",
      description: "The content of the component.",
      default: "undefined",
      controls: () => <TextInput type={"text"} onChange={(e) => {}} height={10}></TextInput>,
    },
    {
      name: "height",
      description: "This is useed to set the height of the button",
      default: "auto",
      controls: (
        <TextInput
          type={"number"}
          onChange={(e) => setState({ ...state, height: +e.value > 18 ? e.value : 18 })}
          height={10}
          name="height"
        />
      ),
    },
    {
      name: "width",
      description: "This is used to set the width of the button",
      default: "auto",
      controls: <TextInput type={"text"} value={"auto"} height={10} disabled />,
    },
    {
      name: "leftIcon",
      description: "This prop is used to insert an Element before the children",
      default: "undefined",
      controls: (
        <CheckBoxInput
          value={state.leftIcon}
          onChange={() => setState({ ...state, leftIcon: !state.leftIcon })}
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
          onChange={() => setState({ ...state, rightIcon: !state.rightIcon })}
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

  return {
    ...state,
    data,
    onReset: () => setState(initialstate),
  };
};

export default useButtonProps;
