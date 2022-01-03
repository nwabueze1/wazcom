/// <reference types="react" />
export declare type ImageUploadStyleProps = {
    width?: string;
    height?: string;
    border?: string;
    uploadedImgPadding?: string;
    uploadButtonPadding?: string;
};
export declare type ImageUploadInputProps = ImageUploadStyleProps & {
    props?: any;
    name?: string;
    error?: boolean;
    label?: React.ReactNode;
    placeholder?: string;
    file?: File;
    fileName?: string;
    handleFile?: (e: React.ChangeEvent<any>) => void;
    value?: unknown;
};
