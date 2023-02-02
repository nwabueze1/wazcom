import { FC, useState } from "react";
import { Filter, FilterSelectorProps } from "./types";
import { RadioButtonInput, TextInput, SelectInput } from "../../../../io";
import { Button } from "../../../../core";
import { useFilterSelectorStyles } from "./styles";
import { filters, getInitialFilter, getSelectOptions } from "./helpers";
import clx from "classnames";

export const FilterSelector: FC<FilterSelectorProps> = ({
    className,
    column,
    handleClose,
    handleSelectFilter,
}) => {
    const classes = useFilterSelectorStyles();
    const [activeFilter, setActiveFilter] = useState<{ value: any; symbol: string }>(
        getInitialFilter(column),
    );

    const handleChange = ({ value }: { name: string; value: any }) => {
        if (column.type !== "date") {
            setActiveFilter({ ...activeFilter, value });
            return;
        }

        const valueSplits = activeFilter.value.toString().split(" ");
        let newValue: string;

        if (isNaN(value)) newValue = valueSplits[0] + " " + value;
        else newValue = value + " " + valueSplits[1];

        setActiveFilter({ ...activeFilter, value: newValue });
    };

    const renderInput = (type: "text" | "number" | "select") => {
        const valueSplits = (activeFilter.value ?? "").toString().split(" ");
        switch (type) {
            case "text":
                return (
                    <TextInput
                        classNames={{ input: classes.filterInput}}
                        value={activeFilter.value}
                        onChange={handleChange}
                    />
                );
            case "number":
                return (
                    <TextInput
                        classNames={{ input: classes.filterInput}}
                        type="number"
                        value={
                            column.type === "number" ? activeFilter.value : Number(valueSplits[0])
                        }
                        onChange={handleChange}
                    />
                );
            default:
                return (
                    <SelectInput
                        className={clx(classes.filterInput, classes.filterSelectInputElement)}
                        classNames={{
                            classes: {
                                select: classes.filterSelectInput,
                            },
                            optionLabel: classes.filterSelectInputLabel,
                        }}
                        placeholder="Select Period"
                        options={getSelectOptions()}
                        value={valueSplits[1]}
                        onChange={handleChange}
                    />
                );
        }
    };

    const renderFilter = () => {
        const filter = filters.find((filter) => filter.type === column.type) as Filter;
        return filter.operators.map(({ name, symbol }, index) => {
            const isActive = activeFilter.symbol === symbol;

            return (
                <div key={index} className={clx(classes.filterOperator)}>
                    <div className={clx(classes.filterOperatorHeading, isActive && classes.filterOperatorActive)}>
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
                        <div style={{ display: "flex", gap: "8px", padding: '0 12px', marginTop: '8px' }}>
                            {filter.inputs.map((input) => renderInput(input))}
                        </div>
                    )}
                </div>
            );
        });
    };

    const applyFilter = () => {
        handleSelectFilter({
            column: column.key,
            operator: activeFilter.symbol,
            value: activeFilter.value,
        });
    };

    return (
        <div className={clx(classes.root, className)} onClick={(e) => e.stopPropagation()}>
            {renderFilter()}
            <div className={classes.filterButtons}>
                <Button className={classes.filterButtonSecondary} onClick={() => { handleClose?.() }}>
                    Cancel
                </Button>
                <Button className={classes.filterButtonPrimary} onClick={applyFilter}>
                    Apply filter
                </Button>
            </div>
        </div>
    );
};
