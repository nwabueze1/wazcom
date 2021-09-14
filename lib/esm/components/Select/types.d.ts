/// <reference types="react" />
import { CommonProps } from '../types';
export declare type SelectProps = CommonProps & {
    array: string[];
    handleChange: (event: React.ChangeEvent<{
        value: unknown;
    }>) => void;
    value?: string;
};
