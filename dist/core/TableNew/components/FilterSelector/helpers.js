export var filters = [
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
                name: "Is Greater Than or Equals",
                symbol: ">=",
            },
            {
                name: "Is Greater Than",
                symbol: ">",
            },
            {
                name: "Equals",
                symbol: "=",
            },
            {
                name: "Is Less Than",
                symbol: "<",
            },
            {
                name: "Is Less Than or Equals",
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
export var getInitialFilter = function (column) {
    switch (column.type) {
        case "string":
            return { value: "", symbol: "=" };
        case "number":
            return { value: undefined, symbol: ">=" };
        default:
            return { value: "10 hours", symbol: "<" };
    }
};
export var getSelectOptions = function () { return [
    { label: "Hours", value: "hours" },
    { label: "Days", value: "days" },
    { label: "Weeks", value: "weeks" },
]; };
