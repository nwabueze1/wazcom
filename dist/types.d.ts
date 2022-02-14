export interface CommonProps {
    name?: string;
    onChange?: (data: {
        name: string;
        value: any;
    }) => void;
    className?: string;
}
