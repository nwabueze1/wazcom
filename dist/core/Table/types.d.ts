/// <reference types="react" />
import { History } from "history";
interface SchemaCommonProps {
    label?: string;
}
interface RowItemProps {
    item: {
        [key: string]: any;
    };
    uniqueId: string | number;
    history?: History;
    handleMenuDelete?: (value: any) => void;
}
interface SchemaComponentProps extends SchemaCommonProps {
    component: (props: RowItemProps) => React.DetailedHTMLProps<any, any>;
}
interface SchemaFuncProps extends SchemaCommonProps {
    func: (props: RowItemProps) => string;
}
export declare type SchemaProps = SchemaComponentProps | SchemaFuncProps;
export declare type TableHeaderContentProps = {
    name: string;
    label: string;
}[];
export declare type TableDataProps = ({
    [key: string]: any;
} & {
    actions?: {
        [key: string]: () => void;
    };
})[];
export interface TableProps {
    identifier?: string | number;
    isSpaced?: boolean;
    schema?: SchemaProps[];
    collection?: {
        [key: string]: any;
    }[];
    styleProps?: any;
    hasCheckBox?: boolean;
    pagination?: boolean;
    handleMenuDelete?: (value: any) => void;
    data: TableDataProps;
    headers: TableHeaderContentProps;
}
export {};
