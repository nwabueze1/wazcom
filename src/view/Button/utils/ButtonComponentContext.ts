import { createContext } from "react";

export type IIntitialState = {
  isDisabled: boolean;
  isLoading: boolean;
  variant: "contained" | "outlined" | "text";
  value: string;
  leftIcon: boolean;
  rightIcon: boolean;
  height: number;
  width: number | string;
  title: string;
  onChange: (e: { name: string; value: string }) => void;
};

export const initialButtonProp: Omit<IIntitialState, "onChange"> = {
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
const ButtonPropsContext = createContext<IIntitialState>({
  ...initialButtonProp,
  onChange: (e) => {},
});
export default ButtonPropsContext;
