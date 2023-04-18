import { useState } from "react";
import { ComponentPropsType } from "core/ComponentProps/types";

const initialState = {
  isSuccess: false,
  isError: false,
};
export const useUrlInputData = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "isSuccess",
      description: "This is used to check if the validation is correct ",
      default: "undefined",
      control: {
        name: "isSuccess",
        onChange: handleChange,
        type: "checkbox",
      },
    },
    {
      name: "isError",
      description: "This is used to check if the url input has errors",
      default: "false",
      control: {
        name: "isError",
        onChange: handleChange,
        type: "checkbox",
      },
    },
    {
      name: "name",
      description: "The name of the url input",
      default: "undefined",
    },
    {
      name: "errors",
      description:
        "A collection of object which contains the message returned from validation errors",
      default: "empty array",
    },
    {
      name: "onChange",
      description:
        "A callback function that get's called when the value of the input changes. it has the signature (e:{name:string, value:string|number|boolean})=>void",
      default: "(e:{name:string, value:string})=>{}",
    },
    {
      name: "onBlur",
      description:
        "A callback function that get's called when the url input looses focus. it has the signature (e:{name:string, value:string|number|boolean})=>void",
      default: "(e:{name:string, value:string})=>{}",
    },
    {
      name: "onFocus",
      description:
        "A callback function that get's called when the url input get's focused. it has the signature (e:{name:string, value:string|number|boolean})=>void",
      default: "(e:{name:string, value:string})=>{}",
    },
    {
      name: "onEnter",
      description:
        "A callback function that get's called when the enter button is pressed or the user tries to submit the form. it has the signature (e:{name:string, value:string|number|boolean})=>void",
      default: "(e:{name:string, value:string})=>{}",
    },
  ];

  return {
    data,
    state,
    handleReset: () => setState(initialState),
  };
};
