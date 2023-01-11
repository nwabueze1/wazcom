import { BsBellFill } from "react-icons/bs"
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { startCase } from "lodash";
import * as React from "react";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import { stories, navs } from "../../stories";
import sidebarItems from "../../stories/sidebarItems"
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";
import { useBrowserStyles } from "./styles";
import { BrowserProps } from "./types";

export const Browser: FC<BrowserProps> = () => {
    const classes = useBrowserStyles();
    const [search, setSearch] = useState("");

    return (
        <div className={classes.container}>
            <CssBaseline />
            <div className={classes.drawer}>
                <div className={classes.logo}>
                    <span className={classes.title}>WAZCOM</span>
                </div>
                <div className={classes.sidebarList}>
                    <SidebarListItem sections={sidebarItems} />
                </div>
            </div>
            <div className={classes.appBarWrapper}>
                <div className={classes.appBarComponents}>
                    <TextInput
                        name="search"
                        placeholder="Search..."
                        type="search"
                        className={classes.appBarSearchTextInput}
                        onChange={({ value }: { name: string; value: any }) => {
                            setSearch(value);
                        }}
                        value={search}
                    />
                    <div className={classes.notificationWrapper}>
                        <BsBellFill className={classes.notoficationIcon} />
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                {stories
                    .sort(({ name: aName }, { name: bName }) =>
                        aName.toLowerCase() < bName.toLowerCase()
                            ? -1
                            : aName.toLowerCase() > bName.toLowerCase()
                                ? 1
                                : 0,
                    )
                    .filter(({ name }) => name.toLowerCase().includes(search))
                    .map(({ name, component: Comp, props }, index) => (
                        <div
                            key={index}
                            className={classes.componentWrapper}
                            id={name.toLowerCase()}
                        >
                            <Typography variant="h3">{startCase(name)}</Typography>
                            <div className={classes.well}>
                                {React.cloneElement(<Comp />, props)}
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    );
};
