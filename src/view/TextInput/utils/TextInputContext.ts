import { TextInputContextDataType } from "../types";
import { createContext } from "react";

export const initialTextInputState: Omit<
  TextInputContextDataType,
  "onChange" | "onFocus" | "onEnter" | "onBlur"
> = {
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
export const TextInputContext = createContext<TextInputContextDataType>({
  ...initialTextInputState,
  onChange: (e) => {},
  onFocus: (e) => {},
  onEnter: (e) => {},
  onBlur: (e) => {},
});
