import { CommonProps } from '../types';
/** !!-- Remember to update the interface name !! */
export declare type BreadCrumbProps = CommonProps & {
    paths: Crumb[];
};
declare type Crumb = {
    label: string;
    path: string;
};
export {};
