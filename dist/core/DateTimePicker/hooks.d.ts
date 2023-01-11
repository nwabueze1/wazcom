import { DateTimePickerFields } from "./types";
export declare const useScheduleData: () => (scheduleData: DateTimePickerFields[], handleChange: (event: React.ChangeEvent<{
    name?: string;
    value?: unknown;
}>, index: number, remove?: boolean | undefined) => void, classNames?: {
    [key: string]: string;
} | undefined) => {
    [key: string]: JSX.Element;
}[];
