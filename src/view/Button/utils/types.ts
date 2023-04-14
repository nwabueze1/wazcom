export type InitialStateType = {
  isDisabled: boolean;
  isLoading: boolean;
  variant: "contained" | "outlined" | "text";
  value: string;
  leftIcon: boolean;
  rightIcon: boolean;
  height: number;
  width: number | string;
  title: string;
  onChange?: (e: { name: string; value: string | number | boolean }) => void;
};
