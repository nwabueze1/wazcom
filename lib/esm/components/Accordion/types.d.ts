/// <reference types="react" />
export declare type fieldProps = {
    day: string | number;
    start: string | number;
    end: string | number;
    action?: any;
};
export declare type AccordionProps = {
    className?: string;
    title: string;
    onChange?: (index: number, event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => void;
};
