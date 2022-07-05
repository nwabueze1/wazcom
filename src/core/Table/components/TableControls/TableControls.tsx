import { Box, ListItemIcon, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTableControlsStyles } from "./styles";
import {
  Logout,
  Print,
  SendToMobileOutlined,
  Settings,
} from "@mui/icons-material";
import { Button } from "../../../Button";
import { exportToCSV, exportToXlsx } from "../../helpers";
import { TableControlsProps } from "./types";
import Menu from "@mui/material/Menu";
import { TableFilter } from "../TableFilter";
import { SearchInput } from "./SearchInput";

export const TableControls: React.FC<TableControlsProps> = ({
  controls,
  handleControlsChange,
  showFilter,
  setShowFilter,
  fields,
  values,
  filters,
  setFilters,
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
          <TableFilter
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            fields={fields}
            values={values}
            filters={filters}
            setFilters={setFilters}
          />
        </Box>
      )}
      <SearchInput
        name="search"
        type="text"
        placeholder="Search"
        value={controlsFormData.search}
        onChange={(e: any) => handleControlsChange(e)}
        className={classes.controlsInput}
      />
      <Box className={classes.rightControls}>
        {controls?.canPrint && (
          <Button
            className={classes.controlButton}
            variant="outlined"
            onClick={() => window.print()}
          >
            <Print fontSize="small" />
            <span className={classes.controlButtonText}>Print</span>
          </Button>
        )}
        {controls?.canExport && (
          <>
            <Button
              className={classes.controlButton}
              variant="outlined"
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <SendToMobileOutlined fontSize="small" />
              <span className={classes.controlButtonText}>Export</span>
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
