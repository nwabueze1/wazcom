import { Type } from "templates/blog/types/GlobalTypes/globaltypes";

export type DropDownInputProps = {
    handleRemove: () => void;
    handleChange: () => void;
    onFocus: () => void;
    index: number;
    defaultValue: string;
};
