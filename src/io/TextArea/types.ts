
export type TextAreaProps = {
    name: string;
    value: string;
    minRows: number;
    onChange: ({
        target: { name, value },
    }: React.ChangeEvent<HTMLTextAreaElement>) => void;
}