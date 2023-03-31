import { ReactNode } from "react";
import { CommonProps } from "../../types";
type ClassName = Pick<CommonProps, "className">;
export type AccordionItemProps = {
    title: string | JSX.Element;
    content: string;
    active: boolean;
    allowMultiple?: boolean;
    onToggle: () => void;
    showIcon?: boolean;
};
export type AccordionProps = ClassName & {
    title: string | JSX.Element;
    children: ReactNode;
    showIcon?: boolean;
    allowMultiple?: boolean;
    displayExpandIcon?: boolean;
    isExpanded?: boolean;
};
export {};
