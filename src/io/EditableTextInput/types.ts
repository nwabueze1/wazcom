import { CommonProps } from "../../types";

export type EditableTextInputProps = CommonProps & {
    setHtml?: React.Dispatch<React.SetStateAction<string>>;
    html?: string;
    placeholder?: string;
};
