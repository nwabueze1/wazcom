export type DisplayInputProps = {
    handleRemove: () => void;
    handleChange: (value: string) => void;
    onFocus: () => void;
    index: number;
    value: string;
    type: string;
};
