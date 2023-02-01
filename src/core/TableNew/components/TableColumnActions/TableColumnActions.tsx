import { FC } from "react";
import { TableColumnAction } from "../../types";
import { useTableColumnActionsStyles } from "./styles";
import clx from 'classnames';

export const TableColumnActions: FC<{ actions: TableColumnAction[] }> = ({ actions }) => {
    const classes = useTableColumnActionsStyles();

    const renderActions = () =>
        actions.map(({ name, func }, index) => (
            <p className={classes.action} onClick={func}>
                {name}
                {index !== actions.length - 1 && <span className={classes.actionSeparator}>|</span>}
            </p>
        ));

    return <div className={clx(classes.root, 'column-actions')}>{renderActions()}</div>;
};
