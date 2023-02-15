import { CommonProps } from "../../../../types";

export type InsertButtonProps = CommonProps & {
    handleImageModalState: (data?: string) => void;
};

export type ImageProperties = {
    url: string;
    width: SizeFields;
    height: SizeFields;
    title: string;
};

export type SizeFields = { [key in "desktop" | "tablet" | "mobile"]: string };

export type OptionItemProps = {
    icon: any,
    title: string,
    itemInfo: string,
    handleOptionClick: (option: string) => void
}