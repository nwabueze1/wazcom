import { CommonProps } from "../../types";

export type PhoneNumberInputProps = CommonProps & {
  [key: string]: any;
  name: string;
  country?: string;
};
