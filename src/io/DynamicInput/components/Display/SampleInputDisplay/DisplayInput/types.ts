export type DisplayInputProps = {
    handleRemove: () => void;
    handleChange: (value: string) => void;
    onFocus: () => void;
    index: number;
    defaultValue: string;
    type: string;
};
