export type ColorInputProps = {
    name: string;
    value: string;
    onChange?: (data: {
        name: string;
        value: string;
    }) => void;
};
