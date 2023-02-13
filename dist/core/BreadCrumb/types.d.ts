import { CommonProps } from "../../types";
/** !!-- Remember to update the interface name !! */
export type BreadCrumbProps = CommonProps & {
    crumbs: Crumb[];
    handleClick: (path: string) => void;
};
type Crumb = {
    label: string;
    path: string;
};
export {};
