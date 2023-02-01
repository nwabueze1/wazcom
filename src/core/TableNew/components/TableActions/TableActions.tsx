import { FC, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { TableActionsProps } from "./types";
import { TextInput, SelectInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { TableColumn, TableConditionFilter } from "../../types";
import { ColumnSelector } from "../ColumnSelector";
import { SortSelector } from "../SortSelector";
import { InputAdornment } from "@mui/material";
import { debounce } from "lodash";

export const TableActions: FC<TableActionsProps> = ({
    currentActions,
    setCurrentActions,
    conditionFilters,
    columns,
}) => {
    const classes = useTableActionStyles();
    const updateSearchValue = useRef(debounce((search: string) => setCurrentActions({ ...currentActions, search }), 500))

    const handleConditionChange = ({ value: name }: { name: string; value: string }) => {
        const newConditionFilter = conditionFilters?.find((filter) => filter.name === name);
        setCurrentActions({ ...currentActions, conditionFilter: newConditionFilter });
    };

    const handleColumnsChange = (columnFilters: TableColumn[]) => {
        setCurrentActions({ ...currentActions, columnFilters });
    };

    const handleSearchChange = ({ value: search }: { name: string; value: string }) => {
        updateSearchValue.current(search);
    };

    const handleSortChange = (order: "asc" | "desc", columnKey: string) => {
        setCurrentActions({ ...currentActions, sort: [{ order, column: columnKey }] });
    };

    const getSearchPlaceholder = () => {
        const textColumns = columns.filter((column) => typeof column.name === "string");
        const columnNames = textColumns.map(({ name }) => name.toString().toLowerCase());
        return `Search by ${columnNames.join(", ")}`;
    };

    return (
        <div className={classes.root}>
            <TextInput
                className={classes.searchInputElement}
                InputProps={{
                    classes: {
                        input: classes.searchInput,
                        adornedStart: classes.searchInputAdornment,
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <BiSearch />
                        </InputAdornment>
                    ),
                    endAdornment: <InputAdornment position="end"></InputAdornment>,
                }}
                onChange={handleSearchChange}
                placeholder={getSearchPlaceholder()}
            />
            <SortSelector
                columns={columns}
                handleSelectSort={handleSortChange}
            />
            {conditionFilters && (
                <SelectInput
                    className={classes.selectInputElement}
                    classNames={{
                        classes: { select: classes.selectInput, icon: classes.selectInputIcon },
                        optionLabel: classes.selectInputLabel,
                    }}
                    options={conditionFilters.map(({ name }) => ({ label: name, value: name }))}
                    value={(currentActions.conditionFilter as TableConditionFilter).name}
                    onChange={handleConditionChange}
                />
            )}
            <ColumnSelector
                columns={columns}
                columnFilters={currentActions.columnFilters as TableColumn[]}
                handleColumnChange={handleColumnsChange}
            />
        </div>
    );
};
