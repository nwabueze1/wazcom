import { ComboBoxInputProps } from "../../io/ComboBoxInput/index";
export declare type GqlComboBoxProps = ComboBoxInputProps & {
    config: {
        type: "query";
        key?: string;
        name: any;
    };
    addOption?: (value: string) => Promise<{
        label?: string;
        value?: string;
        status: boolean;
    }>;
    addingOption?: boolean;
};
