import { ComponentPropsType } from "../../../core/ComponentProps/types";
import { useState } from "react";

const initialTextInputState = {
  isSuccess: false,
  isError: false,
  helperText: "",
  name: "",
  hideLabel: false,
  required: false,
  showCC: false,
  type: "text",
  leftIcon: false,
  rightIcon: false,
  iconSpacing: 5,
  background: "",
  color: "",
};

export const useTextInputProps = () => {
  const [state, setState] = useState(initialTextInputState);

  const onChange = (e: any) => setState({ ...state, [e.name]: e.value });

  const data: Partial<ComponentPropsType>[] = [
    {
      name: "name",
      description: "The name of the input component",
      default: "empty string",
      control: { name: "name", type: "text", onChange },
    },
    {
      name: "value",
      description: "The value of the input component",
      default: "undefined",
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
      name: "isSuccess",
      description: "This represents the success state of the component",
      default: "false",
      control: { name: "isSuccess", type: "checkbox", onChange },
    },
    {
      name: "helperText",
      description: "This provides additional information about the field the component represents",
      default: "undefined",
      control: { name: "helperText", type: "checkbox", onChange },
    },

    {
      name: "onChange",
      description:
        "Change event handler for the component. Triggered when the user changes the component’s value",
      default: "({name, value})=>void",
    },
    {
      name: "onFocus",
      description:
        "TextInputFocus event handler for the component. Triggered when the component is focused.",
      default: "({name,email})=>void",
    },
    {
      name: "onBlur",
      description:
        "Blur event handler for the component. Triggered when the component is unfocused.",
      default: "({name,email})=>void",
    },
    {
      name: (
        <>
          Required <span style={{ color: "red" }}>*</span>
        </>
      ),
      description: "Marks the component as required in a form",
      default: "false",
      control: { name: "required", type: "checkbox", onChange },
    },
    {
      name: "type",
      description: "The type of the Input component e.g text, tel, number",
      default: "text",
    },
    {
      name: "leftIcon",
      description: "Left/start icon of the Input component.",
      control: { name: "leftIcon", type: "checkbox", onChange },
      default: "undefined",
    },
    {
      name: "rightIcon",
      description: "Right/end icon of the Input component.",
      control: { name: "rightIcon", type: "checkbox", onChange },
      default: "undefined",
    },
    {
      name: "iconSpacing",
      description: "This specifies the space between the icon and the Input’s value.",
      default: "undefined",
    },
  ];

  return {
    data,
    onReset: () => setState(initialTextInputState),
    state,
  };
};
