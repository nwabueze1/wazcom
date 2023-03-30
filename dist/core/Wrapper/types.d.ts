import { ReactNode } from "react";
export type WrapperProps = {
    children?: ReactNode;
    className?: string;
    classNames?: any;
    title?: string;
    description?: string;
    showHeader?: boolean;
    showBody?: boolean;
};
