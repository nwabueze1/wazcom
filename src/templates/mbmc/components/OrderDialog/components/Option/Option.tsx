import { FC, useState, useContext, useCallback, useEffect } from "react";
import { OptionProps } from "./types";
import { parseSelectedChoices } from "./helpers";
import { Option as OptionType } from "../../types";
import { RestaurantContext } from "../../../../contexts";
import { getCurrency } from "../../../../../../utilities";
import { RadioButtonInput, CheckBoxInput } from "../../../../../../io";
import { useOptionStyles } from "./styles";

export const Option: FC<OptionProps> = ({
    name,
    type,
    options,
    selectedOptions,
    handleUpdateSelectedOptions,
}) => {
    const classes = useOptionStyles();
    const { menu } = useContext(RestaurantContext);
    const [selectedChoices, setSelectedChoices] = useState<OptionType["selectedChoices"]>(
        parseSelectedChoices(selectedOptions, name),
    );

    let currency = menu?.restaurant?.bank_info?.currency ?? "";
    currency = getCurrency(currency);

    useEffect(() => {
        setSelectedChoices(parseSelectedChoices(selectedOptions, name));
    }, [selectedOptions]);

    const updateSelectedOptions = useCallback(
        (add: boolean, choice: { name: string; amount: string }) => {
            let newSelectedChoices = [...selectedChoices];
            if (type === "selection") newSelectedChoices = [];

            if (add) {
                newSelectedChoices.push(choice);
            } else {
                const idx = newSelectedChoices.findIndex(
                    (selectedChoice) =>
                        selectedChoice.amount === choice.amount &&
                        selectedChoice.name === choice.name,
                );
                newSelectedChoices.splice(idx, 1);
            }
            setSelectedChoices(newSelectedChoices);
            handleUpdateSelectedOptions({
                name,
                type,
                selectedChoices: newSelectedChoices,
            });
        },
        [handleUpdateSelectedOptions, selectedChoices],
    );

    const displayConfig = useCallback(() => {
        let configOptions;
        switch (type) {
            case "selection":
                configOptions = options.selection;
                break;
            case "deselection":
                configOptions = options.deselection;
                break;
            case "extras":
                configOptions = options.extras;
                break;
        }

        return configOptions?.map((config, index) => {
            const amount = (type === "deselection" ? "-" : "+") + currency + config?.amount;
            const name = config?.name as string;
            const isChecked = Boolean(
                selectedChoices.find(
                    (choice) => choice.name === name && choice.amount === amount.slice(2),
                ),
            );
            const picker =
                type === "selection" ? (
                    <RadioButtonInput value={isChecked} className={classes.optionPicker} />
                ) : (
                    <CheckBoxInput value={isChecked} className={classes.optionPicker} />
                );

            return (
                <div
                    onClick={() => {
                        updateSelectedOptions(!isChecked, {
                            name,
                            amount: amount.slice(2),
                        });
                    }}
                    className={classes.option}
                    key={index}
                >
                    <div className={classes.optionPickerParent}>
                        {picker}
                        <p className={classes.optionText}>{name}</p>
                    </div>
                    <p className={classes.optionAmount}>
                        {(type === "deselection" ? "-" : config?.amount == 0 ? "" : "+") +
                            (config?.amount !== 0 ? currency : "")}
                        {config?.amount}
                    </p>
                </div>
            );
        });
    }, [selectedChoices, handleUpdateSelectedOptions]);

    const displayOption = () => {
        switch (type) {
            case "selection":
                return "Please select a variant. You can only pick one option";
            default:
                return `You can pick multiple options`;
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.optionDescription}>
                <div>
                    <p className={classes.optionName}>{name}</p>
                    <p className={classes.optionHelperText}>{displayOption()}</p>
                </div>
                {type === 'selection' && <span className={classes.optionRequired}>REQUIRED</span>}
            </div>
            {displayConfig()}
        </div>
    );
};
