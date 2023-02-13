import { FC } from "react";
import { useSelectorStyles } from "./styles";
import { SelectorProps } from "./types";
import { AiOutlineCheck } from "react-icons/ai";
import { Button } from "../";
import clx from "classnames";

export const Selector: FC<SelectorProps> = ({ options, value: selectorValue, handleChange }) => {
    const classes = useSelectorStyles();

    const displayOptions = () =>
        options.map(({ name, value }, index) => {
            const isActive = value?.toLowerCase() === (selectorValue ?? "").toLowerCase();
            return (
                <Button
                    key={index}
                    onClick={() => {
                        handleChange?.(value);
                    }}
                    className={clx(
                        classes.selectorOption,
                        index === 0 && classes.selectorOptionInitial,
                        index === (options.length - 1) && classes.selectorOptionFinal,
                        isActive && classes.selectorOptionActive,
                    )}
                >
                    {name} {isActive && <AiOutlineCheck className={classes.selectorIcon} />}
                </Button>
            );
        });

    return <div className={classes.root}>{displayOptions()}</div>;
};
