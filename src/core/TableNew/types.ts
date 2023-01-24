import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { DocumentNode } from "graphql";
import { CommonProps } from "../../types";

export type TableNewProps = CommonProps & {
    columns: TableColumn[];
    conditionFilters?: TableConditionFilter[];
    getRows: (data: any, classes?: any) => { [key: string]: JSX.Element | string }[];
    query: TableQuery;
    rowsPerPage?: number;
};

export type TableColumn = {
    name: string | JSX.Element;
    key: string;
    type: 'string' | 'number' | 'date';
}

export type TableQuery = {
    name: DocumentNode;
    client: ApolloClient<NormalizedCacheObject>;
    variables?: { [key: string]: any };
    dataKey: string;
}

export type TableConditionFilter = {
    name: string;
    condition: (element: any) => boolean;
} 