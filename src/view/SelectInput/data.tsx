import { useState } from "react";
import { ComponentPropsType } from "../../core/ComponentProps/types";

const initialState = {
  name: "",
  value: "",
  label: "Default",
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  options: [
    {
      label: "Label",
      value: "Value",
    },
    {
      label: "Label 2",
      value: "Value 2",
    },
  ],
};

export const useSelectInputData = () => {
  const [state, setState] = useState(initialState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "value",
      description: "The value of the select input. The current selected value",
      default: "undefined",
    },
    {
      name: "label",
      description: "The label of the select input",
      default: "undefined",
      control: {
        type: "text",
        name: "label",
        onChange,
      },
    },
    {
      name: "options",
      description:
        "This is used to provide the options which the users can choose from. it contains an array of option; each option must have a label and a value i.e option{name, value}.",
      default: "empty Array i.e []",
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
      default: "(e:{name:string;value:string})=>{}",
    },
    {
      name: "onFocus",
      description:
        "TextInputFocus event handler for the input. Triggered when the component is focused.",
      default: "(e)=>void",
    },
    {
      name: "onBlur",
      description: "Blur event handler for the input. Triggered when the component is unfocused.",
      default: "(e)=>void",
    },
  ];
  return {
    data: data as ComponentPropsType[],
    state: { ...state, onChange },
    onReset: () => setState(initialState),
  };
};
