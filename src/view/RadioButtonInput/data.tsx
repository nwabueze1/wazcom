import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";

const initialState = {
  name: "",
  value: false,
  label: "Label",
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  isDisabled: false,
};

export const useRadioButtonProps = () => {
  const [state, setState] = useState(initialState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "value",
      description:
        "The value of the radio input. This component accepts both a boolean value and a string value",
      default: "undefined",
      control: {
        type: "checkbox",
        name: "value",
        onChange,
      },
    },
    {
      name: "label",
      description: "The label of the radio input",
      default: "undefined",
      control: {
        type: "text",
        name: "label",
        onChange,
      },
    },
    {
      name: "isBooleanValue",
      description:
        "This prop is used to specify if radio input should  accept and return only boolean value.",
      default: "true",
    },
    {
      name: "isSuccess",
      description: "This represents the success state of the component.",
      default: "false",
      control: {
        name: "isSuccess",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "isError",
      description: "This represents the error state of the component",
      default: "false",
      control: {
        name: "isError",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "isDisabled",
      description: "This is used to disable the radio input",
      default: "false",
      control: {
        name: "isDisabled",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "name",
      description: "The name of the input component",
      default: "undefined",
    },
    {
      name: "errors",
      description:
        "This represents an array of possible error messages for the Input. For example, if the Input’s value is failing validation.",
      default: "empty array",
    },
    {
      name: "onChange",
      description:
        "Change event handler for the component. Triggered when the user changes the component’s value",
      default: "(e:{name:string;value:boolean|string})=>{}",
    },
    {
      name: "onFocus",
      description:
        "TextInputFocus event handler for the component. Triggered when the component is focused.",
      default: "(e)=>void",
    },
    {
      name: "onBlur",
      description:
        "Blur event handler for the component. Triggered when the component is unfocused.",
      default: "(e)=>void",
    },
  ];
  return {
    data,
    state: { ...state, onChange },
    onReset: () => setState(initialState),
  };
};
