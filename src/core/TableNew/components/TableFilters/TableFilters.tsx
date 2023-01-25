import React, { FC, useState } from "react";
import { useTableFiltersStyles } from "./styles";
import { TableFiltersProps } from "./types";
import { ClickAwayListener } from "@mui/base";
import { AiOutlinePlus } from "react-icons/ai";
import clx from "classnames";

export const TableFilters: FC<TableFiltersProps> = ({ columns, filters, setFilters }) => {
    const classes = useTableFiltersStyles();
    const [showFilters, setShowFilters] = useState(false);

    const renderColumns = () => {
        return columns.map(({ name, key }, index) => (
            <div className={classes.filterColumn} key={index}>
                {typeof name === "string" ? name : key.replace(/./g, " ")}
            </div>
        ));
    };

    return (
        <div className={classes.root}>
            <ClickAwayListener
                onClickAway={() => {
                    setShowFilters(false);
                }}
            >
                <div className={classes.filterAddIconParent}>
                    <span
                        className={classes.filterAddIcon}
                        onClick={() => {
                            setShowFilters(!showFilters);
                        }}
                    >
                        <AiOutlinePlus />
                    </span>
                    <div
                        className={clx(
                            classes.filterColumns,
                            showFilters && classes.filterColumnsActive,
                        )}
                    >
                        {renderColumns()}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};
