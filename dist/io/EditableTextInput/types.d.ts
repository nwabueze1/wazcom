/// <reference types="react" />
import { CommonProps } from "../../types";
export declare type EditableTextInputProps = CommonProps & {
    setHtml?: (html: string | JSX.Element) => void;
    html?: string;
    placeholder?: string;
    heading?: boolean;
};
