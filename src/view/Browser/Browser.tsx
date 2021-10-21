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
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Text } from "../../core";
import { stories } from "../../stories";
import { useBrowserStyles } from "./styles";
import { BrowserProps } from "./types";

const drawerWidth = 210;

export const Browser: FC<BrowserProps> = () => {
  const classes = useBrowserStyles();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [search, setSearch] = React.useState("");

  const handleClick = (route: string) => {
    push(route);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawer,
        }}
      >
        <Toolbar>
          <div className={classes.logo}>
            <WidgetsRoundedIcon className={classes.sidebarIcon} />
            <span className={classes.title}>WAZCOM</span>
          </div>
        </Toolbar>
        <List className={classes.sidebarList}>
          {[
            {
              label: "Dashboard",
              icon: <DashboardRoundedIcon className={classes.sidebarIcon} />,
              route: "/",
            },
            {
              label: "Layout",
              icon: <ViewCompactRoundedIcon className={classes.sidebarIcon} />,
              route: "/layout",
            },
            {
              label: "GQL",
              icon: <AutoGraphRoundedIcon className={classes.sidebarIcon} />,
              route: "/gql",
            },
            {
              label: "Mode Enabled",
              icon: <ModeStandbyRoundedIcon className={classes.sidebarIcon} />,
              route: "/mode_enabled",
            },
          ].map(({ label, icon, route }, index) => (
            <div
              key={index}
              className={clx(
                classes.sidebarItem,
                pathname == route && classes.sidebarItemIsActive,
              )}
              onClick={() => handleClick(route)}
            >
              {icon}
              <span className={classes.sidebarLabel}>{label}</span>
            </div>
          ))}
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
