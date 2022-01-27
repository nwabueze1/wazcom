import { CommonProps } from "../../types";
export declare type DisplayCardProps = CommonProps & {
    total: number;
    title: string;
    color?: string;
    close?: () => void;
};
