import { BlockCta, BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock12Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    ctas?: BlockCta[];
    client?: {
        type: "emailjs";
        credentials: {
            [key: string]: string;
        };
    };
};

export type HandleSend = (
    data: {
        name: string;
        email: string;
        phoneNo: string;
        message: string;
    },
    client: MbmcBlock12Props["client"],
) => Promise<void>;
