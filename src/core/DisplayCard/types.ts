import { CommonProps } from "../../types";

export type DisplayCardProps = CommonProps & {
    total: number;
    title: string;
    color?: string;
    close?: () => void;
};
