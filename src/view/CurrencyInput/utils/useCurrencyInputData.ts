import { useState } from "react";
import { ComponentPropsType } from "../../../core/ComponentProps/types";

const initialState = {
  isError: false,
  isSuccess: false,
  isDisabled: false,
  showDropdownIcon: true,
};

export const useCurrencyInputData = () => {
  const [state, setState] = useState(initialState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
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
      description: "This prop is used to enable or disable the input",
      default: "false",
      control: {
        name: "isDisabled",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "showDropdownIcon",
      description: "This prop is used to enable or disable dropdown Icon",
      default: "true",
      control: {
        name: "showDropdownIcon",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "name",
      description: "The name of the input",
      default: "undefined",
    },
    {
      name: "currency",
      description: "The currency used. eg usd, cad, ngn",
      default: "undefined",
    },
    {
      name: "The label",
      description: "The label of the input",
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
    handleReset: () => setState(initialState),
    state,
  };
};
