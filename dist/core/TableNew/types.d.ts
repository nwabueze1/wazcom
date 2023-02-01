import React from 'react';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { DocumentNode } from "graphql";
import { CommonProps } from "../../types";
export declare type TableNewProps = CommonProps & {
    columns: TableColumn[];
    conditionFilters?: TableConditionFilter[];
    getRows: (data: any, classes?: any) => {
        [key: string]: JSX.Element | string | number;
    }[];
    query: TableQuery;
    EmptyState?: React.ReactElement;
    showFilters?: boolean;
};
export declare type TableColumn = {
    name: string | JSX.Element;
    key: string;
    type: 'string' | 'number' | 'date';
};
export declare type TableQuery = {
    name: DocumentNode;
    client: ApolloClient<NormalizedCacheObject>;
    variables?: {
        [key: string]: any;
    };
    dataKey: string;
};
export declare type TableFilter = {
    column: string;
    operator: string;
    value: string;
};
export declare type TableConditionFilter = {
    name: string;
    condition: (element: any) => boolean;
};
export declare type TableSort = {
    column: string;
    order: 'asc' | 'desc';
};
export declare type TablePagination = {
    currentPage: number;
    lastPage: number;
    count: number;
};
