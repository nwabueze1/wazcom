import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { startCase } from "lodash";
import * as React from "react";
import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { TextInput } from "../../io";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";
import { drawerWidth, useTemplateStyles } from "./styles";
import { BrowserProps } from "./types";

export const Templates: FC<BrowserProps> = () => {
    const classes = useTemplateStyles();
    const [search, setSearch] = useState("");
    const history = useHistory();

    const sections = [
        {
            label: "",
            components: []
        },
    ];

    const viewElement = (name: string) => {
        history.push(`/templates/template_id/${name}`);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <TextInput
                        name="search"
                        color="secondary"
                        placeholder="Search..."
                        variant="outlined"
                        onChange={({ value }: { name: string; value: any }) => {
                            setSearch(value);
                        }}
                        value={search}
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                PaperProps={{
                    sx: {
                        width: drawerWidth,
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <div className={classes.logo}>
                        <WidgetsRoundedIcon className={classes.sidebarIcon} />
                        <span>WAZCOM</span>
                    </div>
                </Toolbar>
                <List>
                    <SidebarListItem title="Blocks" sections={sections} />
                </List>
            </Drawer>
            
        </Box>
    );
};
