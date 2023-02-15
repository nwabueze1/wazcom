import { CommonProps } from "../../../types";
export type PostTitleInputProps = CommonProps & {
    error?: boolean;
    type: string;
    info?: string;
    hideLabel: boolean;
    label: string;
    errors?: [];
    placeholder: string;
    handlePostTitle: (title: string) => void;
};
