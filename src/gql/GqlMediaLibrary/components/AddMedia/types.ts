import { Image } from "../../types";
import { CommonProps } from "../../../../types";

export type AddMediaProps = CommonProps & {
    handleFilesSelection: () => void;
    handleOpenMedia: boolean;
    handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
    viewOnly?: boolean;
    handleMediaAction?: (type: string, media?: Image | File | Array<Image | File>) => void;
    buttonText: string;
};

export type DialogProps = CommonProps & {
    handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
    handleFilesSelection: () => void;
    showHeader?: boolean;
    handleMediaAction?: (type: string, media?: Image | File | Array<Image | File>) => void;
    setActiveTab?: React.Dispatch<
        React.SetStateAction<{
            [key: string]: number;
        }>
    >;
};
