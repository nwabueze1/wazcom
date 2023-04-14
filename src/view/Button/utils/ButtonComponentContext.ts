import { createContext } from "react";
import { InitialStateType } from "./types";

export const initialButtonProp: Omit<InitialStateType, "onChange"> = {
  isDisabled: false,
  isLoading: false,
  variant: "contained",
  value: "",
  leftIcon: false,
  rightIcon: false,
  height: 10,
  width: 10,
  title: "",
};
const ButtonPropsContext = createContext<InitialStateType>({
  ...initialButtonProp,
  onChange: (e) => {},
});
export default ButtonPropsContext;
