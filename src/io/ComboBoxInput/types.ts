
export type ComboBoxInputProps = {
    className?: string;
    name?: string;
    label?: string | JSX.Element;
    options: ComboBoxInputOptionProps[];
    value?: string;
    isAdd?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    required?: boolean;
    helperText?: string;
    placeholder?: string;
    onChange?: (...args: any[]) => void;
}

export type ComboBoxInputOptionProps = {
    label: string;
    value: string;
    subText?: string;
};
