import { Box, ListItemIcon, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTableControlsStyles } from "./styles";
import {
  FilterAlt,
  Logout,
  Print,
  SendToMobileOutlined,
  Settings,
} from "@mui/icons-material";
import { Button } from "../../../Button";
import { TextInput } from "../../../../io";
import { exportToCSV, exportToXlsx } from "core/Table/helpers";
import { TableControlsProps } from "./types";
import Menu from "@mui/material/Menu";

export const TableControls: React.FC<TableControlsProps> = ({
  controls,
  handleControlsChange,
  setShowFilter,
  tableValues,
  controlsFormData,
}) => {
  const classes = useTableControlsStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.controls}>
      {controls?.filter && (
        <Box className={classes.filterControls}>
          <Button
            variant="outlined"
            className={classes.filterControlsButton}
            onClick={() => setShowFilter((state) => !state)}
          >
            Filter
            <FilterAlt />
          </Button>
          <TextInput
            name="search"
            type="text"
            placeholder="Search"
            value={controlsFormData.search}
            onChange={handleControlsChange}
          />
        </Box>
      )}
      <Box className={classes.rightControls}>
        {controls?.canPrint && (
          <Button className={classes.actionButton} variant="outlined">
            <Print fontSize="small" />
            <span>Print</span>
          </Button>
        )}
        {controls?.export && (
          <>
            <Button
              className={classes.actionButton}
              variant="outlined"
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <SendToMobileOutlined fontSize="small" />
              <span>Export</span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => exportToCSV("all_data", tableValues)}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Export as .csv
              </MenuItem>
              <MenuItem onClick={() => exportToXlsx("all_data", tableValues)}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Export as .xlsx
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};
