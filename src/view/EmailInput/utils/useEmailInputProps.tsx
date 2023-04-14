import { useState } from "react";
import { ComponentPropsType } from "../../../core/ComponentProps/types";

const initialState = {
  name: "",
  errors: "",
  isSuccess: false,
  isError: false,
  onChange: false,
  onBlur: false,
  onEnter: false,
  onFocus: false,
};

export const useEmailInputProps = () => {
  const [state, setState] = useState(initialState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: ComponentPropsType[] = [
    {
      name: "isSuccess",
      description:
        "This is used to check if the input validation is successful, i.e data entered into the email input is correct.",
      default: "false",
      control: {
        name: "isSuccess",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "isError",
      description: "validation is unsuccessful",
      default: "false",
      control: {
        name: "isError",
        type: "checkbox",
        onChange,
      },
    },

    {
      name: "name",
      description:
        "The name of the email input. This is need to bind the form to its respective field",
      default: "undefined",
      control: {
        name: "name",
      },
    },
    {
      name: "errors",
      description:
        "This is used to specify the error messages that should showed by the input. It must be an array of objects which must have 'message' as it's key",
      default: "empty array",
      control: {
        name: "",
      },
    },
    {
      name: "onChange",
      description:
        "This is an event raised when the input value changes i.e when user types in the email input. it raises an event which has an oject containing the name and value of the input, i.e (e:{name:string;value:string})=>{}",
      default: "(e:{name:string;value:string})=>{}",
      control: {
        name: "",
      },
    },
    {
      name: "onFocus",
      description:
        "This is an event raised when the user focuses on the email input. it also has the same signature as the onChange event.",
      default: "(e)=>void",
      control: {
        name: "onFocus",
      },
    },
    {
      name: "onEnter",
      description:
        "This is used to handle the event raised when the user clicks on the enter button. it has the same signature as the onClick handler.",
      default: "(e)=>void",
      control: {
        name: "onFocus",
      },
    },
    {
      name: "onBlur",
      description:
        "This is used to handle event raised when the input looses focus i.e user moves away from the input.",
      default: "(e)=>void",
      control: {
        name: "onFocus",
      },
    },
  ];
  return {
    data,
    state,
    onReset: () => setState(initialState),
  };
};
