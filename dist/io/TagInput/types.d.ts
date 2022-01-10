/// <reference types="react" />
export declare type TagInputProps = {
    name?: string;
    error?: boolean;
    label?: React.ReactNode;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<string | unknown>, tags: string[]) => void;
    tags: string[];
};
