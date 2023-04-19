import { ComponentPropsType } from "core/ComponentProps/types";
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
      description: "The name of the input tag",
      default: "empty string",
      control: { name: "name", type: "text", onChange },
    },

    {
      name: "isError",
      description: "This is used to specify if the component is invalid",
      default: "false",
      control: {
        name: "isError",
        type: "checkbox",
        onChange,
      },
    },
    {
      name: "isSuccess",
      description: "To check if the validation is successful",
      default: "false",
      control: { name: "isSuccess", type: "checkbox", onChange },
    },
    {
      name: "helperText",
      description: "used to specify the error and success text",
      default: "undefined",
      control: { name: "helperText", type: "checkbox", onChange },
    },

    {
      name: "onChange",
      description: "for handling the change event of TextInput",
      default: "({name, value})=>void",
    },
    {
      name: "onFocus",
      description: "for handling focus event of the TextInput",
      default: "({name,email})=>void",
    },
    {
      name: "onEnter",
      description: "for handling the event when the enter key is pressed",
      default: "({name, value})=>void",
    },
    {
      name: "onBlur",
      description: "for handling blur event of the TextInput",
      default: "({name,email})=>void",
    },
    {
      name: (
        <>
          Required <span style={{ color: "red" }}>*</span>
        </>
      ),
      description: "if set to true, it makes the TextInput to be required",
      default: "false",
      control: { name: "required", type: "checkbox", onChange },
    },
    {
      name: "type",
      description: "To specify the type of the input type",
      default: "text",
    },
    {
      name: "leftIcon",
      description: "add icon at the start of the TextInput",
      control: { name: "leftIcon", type: "checkbox", onChange },
      default: "undefined",
    },
    {
      name: "rightIcon",
      description: "add icon at the end of the TextInput",
      control: { name: "rightIcon", type: "checkbox", onChange },
      default: "undefined",
    },
    {
      name: "iconSpacing",
      description: "used to specify the space between the icon and the Input",
      default: "undefined",
    },
    {
      name: "background",
      description: "used to change the background of the TextInput",
      default: "transparent",
    },
    {
      name: "color",
      description: "used to change the color of the InputText",
      default: "custom",
    },
    {
      name: "classNames",
      description: "This is used to add style",
      default: "undefined",
    },
  ];

  return {
    data,
    onReset: () => setState(initialTextInputState),
    state,
  };
};
