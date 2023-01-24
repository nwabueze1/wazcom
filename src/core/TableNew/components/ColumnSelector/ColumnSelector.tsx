import React, { FC, useState } from "react";
import { useColumnSelectorStyles } from "./styles";
import { ColumnSelectorProps } from "./types";
import { ClickAwayListener } from "@mui/base";
import { CheckBoxInput } from "../../../../io";
import clx from "classnames";

export const ColumnSelector: FC<ColumnSelectorProps> = ({ columns }) => {
    const [showColumns, setShowColumns] = useState(false);
    const classes = useColumnSelectorStyles();

    const renderColumns = () =>
        columns.map((column, index) => (
            <div className={classes.column} key={index}>
                <CheckBoxInput
                    value={true}
                    className={classes.columnCheckBox}
                    classNames={{ classes: { root: classes.columnCheckBoxRoot } }}
                />
                {typeof column.name === "string" ? column.name : column.key}
            </div>
        ));

    return (
        <ClickAwayListener
            onClickAway={() => {
                setShowColumns(false);
            }}
        >
            <div className={classes.root}>
                <p
                    onClick={() => {
                        setShowColumns(true);
                    }}
                    className={classes.columnBoxText}
                >
                    Table Columns
                </p>
                <div className={clx(classes.columnList, showColumns && classes.columnListActive)}>
                    {renderColumns()}
                </div>
            </div>
        </ClickAwayListener>
    );
};
