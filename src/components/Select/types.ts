import {CommonProps} from '../types';

export type SelectProps = CommonProps & {
    array:string[]  
    handleChange : (event: React.ChangeEvent<{ value: unknown }>) => void
    value?:string
}