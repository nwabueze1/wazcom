// import WidgetsRoundedIcon from "react-icons/md/MdWidgetsRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { FC, useState } from "react";
import { TextInput } from "../../io";
import { drawerWidth, useTemplateStyles } from "./styles";
import { BrowserProps } from "./types";

export const Templates: FC<BrowserProps> = () => {
  const classes = useTemplateStyles();
  const [search, setSearch] = useState("");

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
            {/* <WidgetsRoundedIcon className={classes.sidebarIcon} /> */}
            <span>WAZCOM</span>
          </div>
        </Toolbar>
      </Drawer>
    </Box>
  );
};
