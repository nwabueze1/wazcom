/// <reference types="react" />
import { CommonProps } from "../../types";
export declare type RichTextInputProps = CommonProps & {
    apiKey: string;
    value: string;
    upload?: (tinyCallback?: (location: string, data: {
        [key: string]: string;
    }) => void, setLoadState?: (loading: boolean) => void) => void;
    Loader?: JSX.Element;
};
