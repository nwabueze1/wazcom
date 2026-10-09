import { FC } from "react";
import { useTableColumnActionsStyles } from "./styles";
import clx from "classnames";
import { TableColumnActionProps } from "./types";

export const TableColumnActions: FC<TableColumnActionProps> = ({ actions, identifier }) => {
  const classes = useTableColumnActionsStyles();

  const renderActions = () =>
    actions.map(({ name, func, verify }, index) =>
      verify && !verify(identifier) ? (
        <i key={index} />
      ) : (
        <p
          key={index + name}
          className={classes.action}
          onClick={() => {
            func(identifier);
          }}
        >
          {name}
          {index !== actions.length - 1 && <span className={classes.actionSeparator}>|</span>}
        </p>
      ),
    );

  return <div className={clx(classes.root, "column-actions")}>{renderActions()}</div>;
};
