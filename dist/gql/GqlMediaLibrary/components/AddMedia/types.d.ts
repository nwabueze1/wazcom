/// <reference types="react" />
import { CommonProps } from "types";
export declare type AddMediaProps = CommonProps & {
    handleFilesSelection: () => void;
    handleOpenMedia: boolean;
    handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
    viewOnly?: boolean;
};
export declare type DialogueProps = CommonProps & {
    handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
    handleFilesSelection: () => void;
    showHeader?: boolean;
};
