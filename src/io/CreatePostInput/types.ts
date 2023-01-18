import { CommonProps } from "../../types";

export type CreatePostInputProps = CommonProps & {
    label?: string;
    value: string;
};

export type SizeFields = { [key in "desktop" | "tablet" | "mobile"]: string };

