import React, { FC } from "react";
import { useColumnSelectorStyles } from "./styles";
import { ColumnSelectorProps } from "./types";

export const ColumnSelector: FC<ColumnSelectorProps> = ({ columns }) => {
    const classes = useColumnSelectorStyles();
    
    return (
        <div className={classes.root}>
            All columns

            <div className={classes.columnList}>

            </div>
        </div>
    )
};
