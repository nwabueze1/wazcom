import React, { FC } from "react";
import { TableActionsProps } from "./types";
import { TextInput, SelectInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { TableConditionFilter } from "build";

export const TableActions: FC<TableActionsProps> = ({
    currentActions,
    setCurrentActions,
    conditionFilters,
}) => {
    const classes = useTableActionStyles();

    const handleConditionChange = ({ value: name }: { name: string; value: string }) => {
        const newConditionFilter = conditionFilters?.find((filter) => filter.name === name);
        setCurrentActions({ ...currentActions, conditionFilter: newConditionFilter });
    };

    return (
        <div className={classes.root}>
            <TextInput
                className={classes.searchInputElement}
                InputProps={{ classes: { input: classes.searchInput } }}
                placeholder="Search Table Content"
            />
            {conditionFilters && (
                <SelectInput
                    className={classes.selectInputElement}
                    classNames={{ classes: { select: classes.selectInput } }}
                    options={conditionFilters.map(({ name }) => ({ label: name, value: name }))}
                    value={(currentActions.conditionFilter as TableConditionFilter).name}
                    onChange={handleConditionChange}
                />
            )}
        </div>
    );
};
