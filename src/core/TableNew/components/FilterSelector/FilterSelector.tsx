import React, { FC, useState, useEffect } from "react";
import { Filter, FilterSelectorProps } from "./types";
import { RadioButtonInput, TextInput, SelectInput } from "../../../../io";
import { useFilterSelectorStyles } from "./styles";
import { filters, getInitialFilter, getSelectOptions } from "./helpers";
import clx from "classnames";

export const FilterSelector: FC<FilterSelectorProps> = ({
    className,
    column,
    handleSelectFilter,
}) => {
    const classes = useFilterSelectorStyles();
    const [activeFilter, setActiveFilter] = useState<{ value: any; symbol: string }>(
        getInitialFilter(column),
    );

    const renderInput = (type: "text" | "number" | "select") => {
        const valueSplits = activeFilter.value.toString().split(" ");
        switch (type) {
            case "text":
                return (
                    <TextInput
                        className={classes.filterInput}
                        InputProps={{ classes: { input: classes.filterTextInput } }}
                        value={activeFilter.value}
                    />
                );
            case "number":
                return (
                    <TextInput
                        className={classes.filterInput}
                        InputProps={{ classes: { input: classes.filterTextInput } }}
                        type="number"
                        value={
                            column.type === "number" ? activeFilter.value : Number(valueSplits[0])
                        }
                    />
                );
            default:
                return (
                    <SelectInput
                        className={clx(classes.filterInput, classes.filterSelectInputElement)}
                        classNames={{ classes: { select: classes.filterSelectInput } }}
                        placeholder="Select Period"
                        options={getSelectOptions()}
                        value={valueSplits[1]}
                    />
                );
        }
    };

    const renderFilter = () => {
        const filter = filters.find((filter) => filter.type === column.type) as Filter;
        console.log(activeFilter);
        return filter.operators.map(({ name, symbol }, index) => {
            const isActive = activeFilter.symbol === symbol;
            console.log(isActive);
            return (
                <div key={index} className={classes.filterOperator}>
                    <div className={classes.filterOperatorHeading}>
                        <RadioButtonInput
                            value={isActive}
                            classNames={{ classes: { root: classes.filterOperatorCheck } }}
                            onChange={({ value: checked }: { name: string; value: boolean }) => {
                                if (!checked) return;
                                setActiveFilter({ ...activeFilter, symbol });
                            }}
                        />
                        {name}
                    </div>
                    {isActive && (
                        <div style={{ display: "flex", gap: "8px" }}>
                            {filter.inputs.map((input) => renderInput(input))}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className={clx(classes.root, className)} onClick={(e) => e.stopPropagation()}>
            {renderFilter()}
        </div>
    );
};
