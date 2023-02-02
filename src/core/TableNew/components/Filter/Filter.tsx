import { FC } from "react";
import { TableFilter } from "../../types";
import { useFilterStyles } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export const Filter: FC<
    TableFilter & {
        name: JSX.Element | string;
        type: "string" | "number" | "date";
        handleDelete: () => void;
    }
> = ({ name, column, type, operator, value, handleDelete }) => {
    const classes = useFilterStyles();

    const getRelation = () => {
        switch (type) {
            case "string":
                return operator === "=" ? ": " : ": not ";
            case "number":
                return `: ${operator} `;
            default:
                return operator === ">" ? ": in the last " : ": before ";
        }
    };

    return (
        <div className={classes.root}>
            <span className={classes.filterColumn}>
                {typeof name === "string" ? name : column.replace(/./g, " ")}
            </span>
            {getRelation()}
            {value}
            <AiOutlineClose className={classes.filterCloseIcon} onClick={handleDelete} />
        </div>
    );
};
