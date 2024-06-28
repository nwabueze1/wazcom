import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { DocumentNode } from "graphql";
import { CommonProps } from "../../types";
import React, { FC } from "react";
import { AnyAction } from "redux";
export type TableNewProps = CommonProps & {
    columns: TableColumn[];
    conditionFilters?: TableConditionFilter[];
    getRows: (data: any, classes?: any) => {
        [key: string]: JSX.Element | string | number;
    }[];
    query: TableQuery;
    showFilters?: boolean;
    emptyState?: {
        heading?: string;
        message?: string;
    };
    showSort?: boolean;
    hasStickyActions?: boolean;
    EmptyStateComponent?: FC;
    search?: "single" | "dynamic";
    dispatch?: React.Dispatch<AnyAction>;
};
export type TableColumn = {
    name: string | JSX.Element;
    key: string;
    type: "string" | "number" | "date";
    actions?: TableColumnAction[];
};
export type TableQuery = {
    name: DocumentNode;
    client: ApolloClient<NormalizedCacheObject>;
    variables?: {
        [key: string]: any;
    };
    dataKey: string;
};
export type TableFilter = {
    column: string;
    operator: string;
    value: string;
};
export type TableConditionFilter = {
    name: string;
    condition: (element: any) => any[];
    filter?: TableFilter[];
};
export type TableSort = {
    column: string;
    order: "asc" | "desc";
};
export type TablePagination = {
    currentPage: number;
    lastPage: number;
    count: number;
};
export type TableColumnAction = {
    name: string;
    func: (data?: any) => void;
    verify?: (data?: any) => boolean;
};
