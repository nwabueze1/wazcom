import { CommonProps } from "../../../../types";

export type InsertButtonProps = CommonProps & {
    handleImageModalState: () => void;
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
    handleOptionClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, option: string) => void
}