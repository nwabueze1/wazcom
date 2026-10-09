import { CommonProps } from "../../../../types";

export type LayoutProps = CommonProps & {
    count: number;
    active: boolean;
    onclick: () => void;
};
