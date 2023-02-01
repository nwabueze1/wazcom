import { FC, useState } from "react";
import { RadioButtonInput } from "../../../../io";
import { useSortOptionsStyles } from "./styles";
import { SortOptionsProps } from "./types";
import { Button } from "../../../../core";
import clx from "classnames";

export const SortOptions: FC<SortOptionsProps> = ({ handleSort, handleClose }) => {
    const [order, setOrder] = useState<"asc" | "desc">("asc");
    const classes = useSortOptionsStyles();

    const handleChange = (order: "asc" | "desc", checked: boolean) => {
        if (!checked) return;
        setOrder(order);
    };

    const handleSelectSort = () => {
        handleSort(order);
    };

    return (
        <div className={classes.root}>
            <div className={clx(classes.sortOption, order === "asc" && classes.sortOptionActive)}>
                <RadioButtonInput
                    value={order === "asc"}
                    classNames={{ classes: { root: classes.sortOptionRadio } }}
                    onChange={({ value: checked }: { name: string; value: boolean }) => {
                        handleChange("asc", checked);
                    }}
                />
                <p className={classes.sortOptionText}>Ascending</p>
            </div>
            <div className={clx(classes.sortOption, order === "desc" && classes.sortOptionActive)}>
                <RadioButtonInput
                    value={order === "desc"}
                    classNames={{ classes: { root: classes.sortOptionRadio } }}
                    onChange={({ value: checked }: { name: string; value: boolean }) => {
                        handleChange("desc", checked);
                    }}
                />
                <p className={classes.sortOptionText}>Descending</p>
            </div>

            <div className={classes.sortOptionsButtons}>
                <Button
                    className={classes.sortOptionButtonSecondary}
                    onClick={() => {
                        handleClose?.();
                    }}
                >
                    Cancel
                </Button>
                <Button className={classes.sortOptionButtonPrimary} onClick={handleSelectSort}>
                    Sort
                </Button>
            </div>
        </div>
    );
};
