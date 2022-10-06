export type SampleInputDisplayProps = {
    defaultCount: number;
    defaultValue: string;
    setQuestionOptions?: React.Dispatch<React.SetStateAction<string[]>>;
    type: string;
};
