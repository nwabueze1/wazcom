import { FC } from "react";

import { Tab } from "core";

import { useTabsStyles } from "./styles";
import { TabsProps } from "./types";

export const TabsView: FC<TabsProps> = () => {
    const classes = useTabsStyles();

    const controls = [
        { name: 'CONTROL', title: 'CONTROL TILE', component: <div>COMPONENT</div> },
        { name: 'CONTROL_@', title: 'CONTROL TILE 2', component: <div>COMPONENT 2</div> }
    ];

    return (
        <div className={classes.container}>
            <Tab
                controls={controls}
                variant="vertical"
                borderRadius={14}
                height={20}
            />
        </div>
    );
};
