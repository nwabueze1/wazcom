import { IComponentProps } from "core/ComponentProps/types";
import { useContext } from "react";
import { CheckBoxInput, TextInput } from "../../../build";
import { TextInputContext } from "./TextInputContext";

export const useTextInputProps = () => {
  const { onChange } = useContext(TextInputContext);

  const data: IComponentProps[] = [
    {
      name: "className",
      description: "This is used to add class for styling the component.",
      default: "undefined",
    },
    {
      name: "isError",
      description: "This is used to specify if the component is invalid",
      default: "false",
      controls: <CheckBoxInput name="isError" onChange={onChange} />,
    },
    {
      name: "isSuccess",
      description: "To check if the validation is successfull",
      default: "false",
      controls: <CheckBoxInput name="isSuccess" onChange={onChange} />,
    },
    {
      name: "helperText",
      description: "used to specify the error and success text",
      default: "undefined",
      controls: <TextInput name="helperText" onChange={onChange} placeholder="helper text" />,
    },
    {
      name: "name",
      description: "The name of the input tag",
      default: "empty string",
      controls: <TextInput name="name" onChange={onChange} />,
    },
    {
      name: "onChange",
      description: "for handling the change event of TextInput",
      default: "({name, value})=>void",
      controls: "null",
    },
    {
      name: "onFocus",
      description: "for handling focus event of the TextInput",
      default: "({name,email})=>void",
      controls: "null",
    },
    {
      name: "onEnter",
      description: "for handling the event when the enter key is pressed",
      default: "({name, value})=>void",
      controls: "null",
    },
    {
      name: "onBlur",
      description: "for handling blur event of the TextInput",
      default: "({name,email})=>void",
      controls: "null",
    },
    {
      name: (
        <>
          Required <span style={{ color: "red" }}>*</span>
        </>
      ),
      description: "if set to true, it makes the TextInput to be required",
      default: "false",
      controls: <CheckBoxInput name="required" onChange={onChange} />,
    },
    {
      name: "type",
      description: "To specify the type of the input type",
      default: "text",
      controls: "null",
    },
    {
      name: "leftIcon",
      description: "add icon at the start of the TextInput",
      controls: <CheckBoxInput name="leftIcon" onChange={onChange} />,
      default: "undefined",
    },
    {
      name: "rightIcon",
      description: "add icon at the end of the TextInput",
      controls: <CheckBoxInput name="rightIcon" onChange={onChange} />,
      default: "undefined",
    },
    {
      name: "iconSpacing",
      description: "used to specify the space between the icon and the Input",
      default: "0",
      controls: "null",
    },
    {
      name: "background",
      description: "used to change the background of the TextInput",
      default: "transparent",
      controls: <CheckBoxInput name="background" onChange={onChange} />,
    },
    {
      name: "color",
      description: "used to change the color of the InputText",
      default: "custom",
      controls: <CheckBoxInput name="color" onChange={onChange} />,
    },
    {
      name: "classNames",
      description: "This is used to add style",
      default: "undefined",
      controls: "null",
    },
  ];

  return {
    data,
  };
};
