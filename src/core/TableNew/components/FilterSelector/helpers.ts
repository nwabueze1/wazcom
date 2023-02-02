import { TableColumn } from "../../types";
import { Filter } from "./types";

export const filters: Filter[] = [
    {
        type: "string",
        inputs: ["text"],
        operators: [
            {
                name: "Is",
                symbol: "=",
            },
            {
                name: "Is not",
                symbol: "!=",
            },
        ],
    },
    {
        type: "number",
        inputs: ["number"],
        operators: [
            {
                name: "Greater Than or Equals",
                symbol: ">=",
            },
            {
                name: "Greater Than",
                symbol: ">",
            },
            {
                name: "Equals",
                symbol: "=",
            },
            {
                name: "Less Than",
                symbol: "<",
            },
            {
                name: "Less Than or Equals",
                symbol: "=<",
            },
        ],
    },
    {
        type: "date",
        inputs: ["number", "select"],
        operators: [
            {
                name: "Before",
                symbol: "<",
            },
            {
                name: "In the last",
                symbol: ">",
            },
        ],
    },
];

export const getInitialFilter = (column: TableColumn) => {
    switch (column.type) {
        case "string":
            return { value: "", symbol: "=" };
        case "number":
            return { value: undefined, symbol: ">=" };
        default:
            return { value: "10 hours", symbol: "<" };
    }
};

export const getSelectOptions = () => [
    { label: "Hours", value: "hours" },
    { label: "Days", value: "days" },
    { label: "Weeks", value: "weeks" },
];
