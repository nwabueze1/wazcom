import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { BsBellFill } from "react-icons/bs"
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import { startCase } from "lodash";
import * as React from "react";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import { stories, navs } from "../../stories";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";
import { useBrowserStyles } from "./styles";
import { BrowserProps } from "./types";

export const Browser: FC<BrowserProps> = () => {
    const classes = useBrowserStyles();
    const [search, setSearch] = useState("");

    const sections = [
        {
            label: "Base",
            components: stories.map(({ name }) => ({
                id: name.toLowerCase(),
                label: startCase(name),
            })),
        },
        {
            label: "Navs",
            components: navs.map(({ name }) => ({
                id: name.toLowerCase(),
                label: startCase(name),
            })),
        },
    ];

    return (
        <div className={classes.container}>
            <CssBaseline />
            <div className={classes.drawer}>
                <div className={classes.logo}>
                    <WidgetsRoundedIcon className={classes.sidebarIcon} />
                    <span className={classes.title}>WAZCOM</span>
                </div>
                <List className={classes.sidebarList}>
                    <SidebarListItem title="Components" sections={sections} />
                </List>
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
