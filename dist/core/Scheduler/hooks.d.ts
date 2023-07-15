import { Schedule } from "./types";
export declare const dayOptions: {
    value: string;
    label: string;
}[];
export declare const useScheduleData: () => (scheduleData: Schedule[], handleChange: (name: string, value: any, index: number, remove?: boolean) => void, classNames?: {
    [key: string]: string;
} | undefined) => {
    [key: string]: JSX.Element;
}[];
export declare const dayDelimiter = "2023-04-14";
