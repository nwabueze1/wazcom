export type SelectorProps = {
    options: SelectorOption[];
    value?: string;
    handleChange?: (value: string) => void;
};
export type SelectorOption = {
    name: string;
    value: string;
};
