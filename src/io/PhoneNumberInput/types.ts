import { CommonProps } from "../../types";

export type PhoneNumberInputProps = CommonProps & {
    [key: string]: any,
    country: string,
    inputClass?: string,
    dropdownClass?: string
    containerClass?: string
}
