/// <reference types="react" />
import { CommonProps } from "../../types";
export declare type RichTextInputProps = CommonProps & {
    label?: string;
    apiKey: string;
    value: string;
    upload?: (tinyCallback?: (location: string, data: {
        [key: string]: string;
    }) => void, setLoadState?: (loading: boolean) => void) => void;
    Loader?: JSX.Element;
};
