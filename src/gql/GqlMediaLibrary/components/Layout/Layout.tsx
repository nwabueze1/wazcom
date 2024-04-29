import React from "react";
import { useLayoutStyles } from "./styles";
import clx from "classnames";
import { LayoutProps } from "./types";
import _ from "lodash";

export const Layout: React.FC<LayoutProps> = ({ className, count, onclick, active }) => {
    const classes = useLayoutStyles();
    return (
        <div className={clx(classes.root, className)} onClick={onclick}>
            {_.times(count, () => (
                <div className={clx(classes.innerBox, active && classes.active)} />
            ))}
        </div>
    );
};
