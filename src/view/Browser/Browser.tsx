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
import { TextInput } from "../../io";
import { stories, navs } from "../../stories";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";
import { drawerWidth, useBrowserStyles } from "./styles";
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
            <span className={classes.title}>WAZCOM</span>
          </div>
        </Toolbar>
        <List className={classes.sidebarList}>
          <SidebarListItem title="Components" sections={sections} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        className={classes.main}
      >
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
      </Box>
    </Box>
  );
};
