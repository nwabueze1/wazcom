import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { CommonProps } from "types";
export declare type GqlComboBoxProps = CommonProps & {
    config: {
        client: ApolloClient<NormalizedCacheObject>;
        type: "query";
        key: string[];
        name: any;
        labelKey: string;
        valueKey: string;
    };
    label?: string;
    value?: string;
    postFetchHook?: (values: {
        [key: string]: string;
    }[]) => void;
    addOption?: (value: string) => Promise<{
        label?: string;
        value?: string;
        status: boolean;
    }>;
    variables?: {
        [key: string]: any;
    };
};
