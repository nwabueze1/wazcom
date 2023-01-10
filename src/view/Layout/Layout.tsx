import { BsBellFill } from "react-icons/bs"
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { startCase } from "lodash";
import * as React from "react";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import { stories } from "../../stories";
import sidebarItems from "../../stories/sidebarItems"
import { SidebarListItem } from "./Sidebar/SidebarItems";
import { useLayoutStyles } from "./styles";
import { LayoutProps } from "./types";

export const Layout: FC<LayoutProps> = ({ children }) => {
    const classes = useLayoutStyles();
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
                {children}
            </div>
        </div >
    );
};
