import {CommonProps} from '../types';

export type SelectProps = CommonProps & {
    array:number[]  
     handleChange : (event: React.ChangeEvent<{ value: unknown }>) => void
    value?:number
}