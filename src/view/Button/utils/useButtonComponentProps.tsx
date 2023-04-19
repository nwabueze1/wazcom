import { useState } from "react";
import { ComponentPropsType } from "../../../core/ComponentProps/types";

const initialButtonProps = {
  isDisabled: false,
  isLoading: false,
  variant: "contained",
  value: "",
  leftIcon: false,
  rightIcon: false,
  height: 10,
  width: 10,
  title: "",
  children: "Default Button",
};

const useButtonComponentProps = () => {
  const [state, setState] = useState(initialButtonProps);

  const onChange = (e?: { name: string; value: any }) => {
    if (!e) return;
    setState({ ...state, [e.name]: e.value });
  };

  const handleReset = () => setState(initialButtonProps);

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "isDisabled",
      description: "This indicates whether the Button is disabled or not",
      default: "false",
      control: {
        name: "isDisabled",
        type: "checkbox",
        onChange: onChange,
      },
    },
    {
      name: "isLoading",
      description: "This represents the loading state of the component",
      default: "false",
      control: {
        name: "isLoading",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "children",
      description: "The text of the Button.",
      default: "undefined",
      control: {
        name: "children",
        type: "text",
        onChange,
      },
    },
    {
      name: "height",
      description: "This represents the height of the Button",
      default: "auto",
      control: {
        name: "height",
        type: "number",
        onChange,
      },
    },
    {
      name: "width",
      description: "This represents the width of the Button",
      default: "auto",
    },
    {
      name: "leftIcon",
      description: "Left/start icon of the Button component.",
      default: "undefined",
      control: {
        name: "leftIcon",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "rightIcon",
      description: "Right/end icon of the Button component.",
      default: "undefined",
      control: {
        name: "rightIcon",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "onClick",
      description: "Click event handler for the Button. Triggered when the Button is clicked.",
      default: "()=>void",
    },
  ];

  return {
    data,
    state,
    handleReset,
  };
};

export default useButtonComponentProps;
