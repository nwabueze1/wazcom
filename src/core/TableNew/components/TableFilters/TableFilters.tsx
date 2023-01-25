import React, { FC, useState } from "react";
import { useTableFiltersStyles } from "./styles";
import { TableFiltersProps } from "./types";
import { ClickAwayListener } from "@mui/base";
import { AiOutlinePlus } from "react-icons/ai";
import clx from "classnames";
import { FilterSelector } from "../FilterSelector";
import { TableColumn, TableFilter } from "../../types";

export const TableFilters: FC<TableFiltersProps> = ({ columns, filters, setFilters }) => {
    const classes = useTableFiltersStyles();
    const [showFilters, setShowFilters] = useState(false);
    const [activeColumnKey, setActiveColumnKey] = useState<string>();

    const handleSelectFilter = (filter: TableFilter) => {};

    const renderColumns = () => {
        return columns.map(({ name, key }, index) => {
            const columnName = typeof name === "string" ? name : key.replace(/./g, " ");
            return (
                <div
                    className={classes.filterColumn}
                    key={index}
                    onMouseEnter={() => {
                        setActiveColumnKey(key);
                    }}
                >
                    {columnName}
                    {activeColumnKey === key && (
                        <FilterSelector
                            className={classes.filterSelector}
                            column={
                                columns.find(
                                    (column) => column.key === activeColumnKey,
                                ) as TableColumn
                            }
                            handleSelectFilter={handleSelectFilter}
                        />
                    )}
                </div>
            );
        });
    };

    return (
        <div className={classes.root}>
            <ClickAwayListener
                onClickAway={() => {
                    setShowFilters(false);
                    setActiveColumnKey(undefined);
                }}
            >
                <div className={classes.filterAddIconParent}>
                    <span
                        className={classes.filterAddIcon}
                        onClick={() => {
                            showFilters && setActiveColumnKey(undefined);
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
