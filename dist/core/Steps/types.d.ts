import { ReactNode } from "react";
import { CommonProps } from "../../types";
type StepProps = {
    label?: string;
    title?: string;
};
export type StepsProps = Pick<CommonProps, "className"> & {
    icon?: ReactNode;
    current: number;
    isCompleted?: boolean;
    steps: StepProps[];
};
export {};
