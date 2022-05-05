import { Feedback } from "./helpers/io";
export interface CommonProps {
    name?: string;
    onChange?: (data: {
        name: string;
        value: any;
    }) => void;
    className?: string;
    classNames?: {
        [key: string]: string | {
            [key: string]: string;
        } | undefined;
    };
    feedback?: Feedback;
    helperText?: string | string[] | JSX.Element;
}
