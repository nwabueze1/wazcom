import { CommonProps } from "types";
export type LayoutProps = CommonProps & {
    count: number;
    onclick: () => void;
};
