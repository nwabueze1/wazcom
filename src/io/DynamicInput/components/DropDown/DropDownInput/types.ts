export type DropDownInputProps = {
    handleRemove: () => void;
    handleChange: (value: string) => void;
    onFocus: () => void;
    index: number;
    defaultValue: string;
};
