/// <reference types="react" />
export declare type ToggleProps = {
    name: string;
    label?: string;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    helperText?: string;
};
