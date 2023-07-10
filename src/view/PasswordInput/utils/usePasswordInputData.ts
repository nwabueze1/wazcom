import { useState } from "react";
import { ComponentPropsType } from "../../../core/ComponentProps/types";

const initialState = {
  isSuccess: false,
  isError: false,
  hideLabel: false,
  required: false,
};

export const usePasswordInputData = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "name",
      description:
        "This prop is used to specify the name of the password input. This prop is required for your input to act as a control element.",
      default: "undefined",
    },
    {
      name: "isSuccess",
      description: "This prop is used to check if the validation is success",
      default: "undefined",
      control: {
        type: "checkbox",
        name: "isSuccess",
        onChange: handleChange,
      },
    },
    {
      name: "isError",
      description: "This is used to check if the validation is unsuccessful",
      default: "undefined",
      control: {
        type: "checkbox",
        name: "isError",
        onChange: handleChange,
      },
    },
    {
      name: "hideLabel",
      description: "This is used to hide the label of the label of the password input",
      default: "false",
      control: {
        name: "hideLabel",
        type: "checkbox",
        onChange: handleChange,
      },
    },
    {
      name: "required",
      description: "This prop is used to set the input as required ",
      default: "false",
      control: {
        name: "required",
        type: "checkbox",
        onChange: handleChange,
      },
    },
    {
      name: "config",
      description:
        "An object containing the validation rules. The rules must be an object containing two keys which are limit and require. The limit must be a number to show the min val of the character that must be accepted. then the required can be true or false.",
      default: "initial config",
    },
    {
      name: "initial config",
      description: `
      An object containing the initial configurations. The object must match the following format:
      {
  uppercase: {
    limit: 1,
    required: true,
  },
  symbol: {
    limit: 1,
    required: true,
  },
  length: {
    limit: 8,
    required: true,
  },
  digit: {
    limit: 1,
    required: true,
  },
}
      `,
      default: "undefined",
    },
    {
      name: "errors",
      description:
        "An array of object containing the validation messages; the error message object contains a message key i.e. [{message:'Invalid password'}].",
      default: "empty array",
    },
    {
      name: "onChange",
      description:
        "An event raised when the value of the password input changes. it has the following signature;(e:{name:string, value:string})=>void",
      default: "(e:{name:string, value:string})=>void",
    },
    {
      name: "onBlur",
      description:
        "An event raised when the password looses focus. it has the following signature;(e:{name:string, value:string})=>void",
      default: "(e:{name:string, value:string})=>void",
    },
    {
      name: "onFocus",
      description:
        "An event raised when the password input gets focused. it has the following signature;(e:{name:string, value:string})=>void",
      default: "(e:{name:string, value:string})=>void",
    },
    {
      name: "classNames",
      description: "This is used to customize the styling of the password input.",
      default: "undefined",
    },
  ];

  return {
    data,
    state,
    handleReset: () => setState(initialState),
  };
};
