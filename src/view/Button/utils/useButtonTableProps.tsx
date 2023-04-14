import { useState } from "react";
import { ComponentPropsType } from "core/ComponentProps/types";

const initialButtonProp = {
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

const useButtonPropsData = () => {
  const [state, setState] = useState(initialButtonProp);

  const onChange = (e: { name: string; value: any }) => setState({ ...state, [e.name]: e.value });

  const handleReset = () => setState(initialButtonProp);

  const data: ComponentPropsType[] = [
    {
      name: "isDisabled",
      description: "This prop is used to disable or enable the button",
      default: "false",
      control: {
        name: "isDisabled",
        type: "checkbox",
        onChange: onChange,
      },
    },
    {
      name: "isLoading",
      description: "This prop is used to control the loading state of the button.",
      default: "false",
      control: {
        name: "isLoading",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "children",
      description: "The content of the component.",
      default: "undefined",
      control: {
        name: "children",
        type: "text",
        onChange,
      },
    },
    {
      name: "height",
      description: "This is useed to set the height of the button",
      default: "auto",
      control: {
        name: "height",
        type: "number",
        onChange,
      },
    },
    {
      name: "width",
      description: "This is used to set the width of the button",
      default: "auto",
      control: {
        name: "height",
        type: "number",
        onChange,
      },
    },
    {
      name: "leftIcon",
      description: "This prop is used to insert an Element before the children",
      default: "undefined",
      control: {
        name: "leftIcon",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "rightIcon",
      description: "This prop is used to insert an Elemet after the children",
      default: "undefined",
      control: {
        name: "rightIcon",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "variant",
      description: "This prop is used to change the variations of the button. ",
      default: "contained",
      control: {
        name: "variant",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "onClick",
      description: "This is the function that get's triggered when the button is clicked.",
      default: "()=>void",
      control: {
        name: "onClick",
        type: "checkbox",
        onChange: (e) => {},
      },
    },
  ];

  return {
    data,
    state,
    handleReset,
  };
};

export default useButtonPropsData;
