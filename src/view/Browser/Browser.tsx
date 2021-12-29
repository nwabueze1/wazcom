import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardOutlined";
import ModeStandbyRoundedIcon from "@mui/icons-material/ModeStandbyRounded";
import ViewCompactRoundedIcon from "@mui/icons-material/ViewCompactRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import clx from "classnames";
import { startCase } from "lodash";
import * as React from "react";
import { FC, useState, ChangeEvent } from "react";
import { useHistory, useLocation } from "react-router";
import { Text } from "../../core";
import { stories } from "../../stories";
import { useBrowserStyles, drawerWidth } from "./styles";
import { BrowserProps } from "./types";
import { Button } from "../../core";
import { FiChevronRight } from "react-icons/fi";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";

const sections = [
  {
    label: "Base",
    components: [
      {
        id: "accordion",
        label: "Accordion",
      },
      {
        id: "breadcrumb",
        label: "Breadcrumb",
      },
      {
        id: "button",
        label: "Button",
      },
      {
        id: "accordion",
        label: "Accordion",
      },
      {
        id: "breadcrumb",
        label: "Breadcrumb",
      },
      {
        id: "button",
        label: "Button",
      },
      {
        id: "accordion",
        label: "Accordion",
      },
      {
        id: "breadcrumb",
        label: "Breadcrumb",
      },
      {
        id: "button",
        label: "Button",
      },
      {
        id: "accordion",
        label: "Accordion",
      },
      {
        id: "breadcrumb",
        label: "Breadcrumb",
      },
      {
        id: "button",
        label: "Button",
      },
    ],
  },
];

export const Browser: FC<BrowserProps> = () => {
  const classes = useBrowserStyles();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();

  const handleClick = (route: string) => {
    push(route);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target?.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Text
            name="search"
            color="primary"
            placeholder="Search..."
            variant="outlined"
            onChange={handleChange}
            value={search}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.paper,
        }}
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
          .filter(({ name }) => name.includes(search))
          .map(({ name, component: Comp, props }, index) => (
            <div key={index} className={classes.componentWrapper}>
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
