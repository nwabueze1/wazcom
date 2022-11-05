import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock61Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    client: ApolloClient<NormalizedCacheObject>;
    menu_uuid: string;
};
