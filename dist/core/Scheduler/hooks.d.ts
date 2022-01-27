/// <reference types="react" />
import { Schedule } from "./types";
export declare const useScheduleData: () => (scheduleData: Schedule[], handleChange: (event: React.ChangeEvent<{
    name?: string;
    value?: unknown;
}>, index: number, remove?: boolean | undefined) => void) => {
    [key: string]: JSX.Element;
}[];
