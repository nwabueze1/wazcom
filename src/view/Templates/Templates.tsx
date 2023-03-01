import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { startCase } from "lodash";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMbmcBlocks } from "../../templates/mbmc/mbmc";
import { TextInput } from "../../io";
import { SidebarListItem } from "./SidebarListItem/SidebarListItem";
import { drawerWidth, useTemplateStyles } from "./styles";
import { BrowserProps } from "./types";

export const Templates: FC<BrowserProps> = () => {
  const classes = useTemplateStyles();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const getMbmcBlocks = useGetMbmcBlocks();

  const sections = [
    {
      label: "Mrbakermrscook",
      components: getMbmcBlocks()
        .sort(({ name: aName }, { name: bName }) =>
          aName.split("-")[-1] < bName.split("-")[-1]
            ? -1
            : aName.split("-")[-1] > bName.split("-")[-1]
            ? 1
            : 0,
        )
        .map(({ name }) => ({
          id: name.toLowerCase(),
          label: startCase(name),
          route: `/templates/22/${name.split("").join("")}`,
        })),
    },
  ];

  const viewElement = (name: string) => {
    navigate(`/templates/template_id/${name}`);
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
            // variant="outlined"
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
          <SidebarListItem title="Templates" sections={sections} />
        </List>
      </Drawer>
    </Box>
  );
};
