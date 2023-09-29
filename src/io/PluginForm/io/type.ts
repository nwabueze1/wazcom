import { RadioButtonInputPropsType } from "./TextField";

export type FormikRadioOrCheckBoxPropsType = Omit<
  RadioButtonInputPropsType,
  "isError" | "errorMessage" | "label" | "placeholder"
> & { name: string; options: { label: string; value: string }[] };
