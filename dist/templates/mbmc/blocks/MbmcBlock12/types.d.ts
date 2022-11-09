import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";
export declare type MbmcBlock12Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    ctas?: BlockCta[];
    handleSend: (name: string, email: string, phoneNo: string, message: string) => void;
};
