import { CommonProps } from "../../../../types";

export type InsertDialogProps = CommonProps & {
    dialogType?: string;
    handleDialogClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
};

export type ImageProperties = {
    url: string;
    width: SizeFields;
    height: SizeFields;
    title: string;
};

export type SizeFields = { [key in "desktop" | "tablet" | "mobile"]: string };