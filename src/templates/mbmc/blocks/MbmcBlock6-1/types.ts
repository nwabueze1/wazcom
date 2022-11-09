import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { BlockLayout, MbmcCommonProps } from "templates/mbmc/types";

export type MbmcBlock61Props = MbmcCommonProps & {
    layout?: BlockLayout;
    heading: string;
    description?: string;
    client: ApolloClient<NormalizedCacheObject>;
    menu_uuid: string;
    site_uuid: string;
};

export type TMenuCategory = { title: string; id: number };

export type TMenuItem = {
    name: string;
    description: string;
    price: number;
    image_url: string;
    options: string[];
    currency: string;
    menuCategory: {
        id: number;
    };
};
