import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ComboBoxInputProps } from "../../io/ComboBoxInput/index";
export declare type GqlComboBoxProps = ComboBoxInputProps & {
    config: {
        client: ApolloClient<NormalizedCacheObject>;
        type: "query";
        key: string[];
        name: any;
        labelKey: string;
        valueKey: string;
    };
    addOption?: (value: string) => Promise<{
        label?: string;
        value?: string;
        status: boolean;
    }>;
    variables?: {
        [key: string]: any;
    };
} & any;
