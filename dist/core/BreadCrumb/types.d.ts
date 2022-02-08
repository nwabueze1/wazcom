import { CommonProps } from "../../types";
/** !!-- Remember to update the interface name !! */
export declare type BreadCrumbProps = CommonProps & {
    crumbs: Crumb[];
    handleClick: (path: string) => void;
};
declare type Crumb = {
    label: string;
    path: string;
};
export {};
