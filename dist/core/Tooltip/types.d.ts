import { Placement } from "@floating-ui/react-dom";
import { ReactNode } from "react";
/** !!-- Remember to update the interface name !! */
export type TootipProps = {
    children?: ReactNode;
    position?: Placement;
    content: string;
    duration?: number;
    className?: string;
    status?: string;
    message?: string;
    title?: string;
    classNames?: Partial<Record<string, string>>;
};
