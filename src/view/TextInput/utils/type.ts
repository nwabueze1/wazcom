export type TInitialState = {
  isError: boolean;
  isSuccess: boolean;
  helperText: string;
  name: string;
  hideLabel: boolean;
  required: boolean;
  showCC: boolean;
  type: "text" | "password" | "email" | "tel";
  leftIcon: boolean;
  rightIcon: boolean;
  iconSpacing: number | string;
  background: string;
  color: string;
};
