import {CommonProps} from '../types';

export type ChartProps = CommonProps & {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: number | string;
}
