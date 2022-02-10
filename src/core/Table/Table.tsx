import React, { useEffect, useState } from "react";
import { TableProps } from "./types";
import { useTableStyles } from "./styles";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableFooter,
  TablePagination,
  Box,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import _, { startCase } from "lodash";
import { Button } from "core";
import { TextInput } from "io";
import {
  useGetCurrentPage,
  useGetRowsPerPage,
  useHandleChangePage,
  useHandleChangeRowsPerPage,
  useHandleControlsChange,
  useUpdateTableValue,
} from "./helpers";
import { TableFilter } from "./components";

export const Table = ({
  headers,
  value: initialTableValue,
  hasCheckBox,
  pagination,
  changePage,
  rowsPerPage,
  changeRowsPerPage,
  paginatorInfo,
  controls,
  ...props
}: TableProps) => {
  const classes = useTableStyles();
  const [tableValue, setTableValue] = useState(initialTableValue);
  const [tableHeaders, setTableHeaders] =
    useState<{ name: string; label: string }[]>(headers);
  const [controlsFormData, setControls] = useState<{ [key: string]: any }>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  // All Handler functions are defined as hooks
  const handleChangePage = useHandleChangePage(changePage);
  const getCurrentPage = useGetCurrentPage(paginatorInfo);
  const getRowsPerPage = useGetRowsPerPage(paginatorInfo, rowsPerPage);
  const handleChangeRowsPerPage = useHandleChangeRowsPerPage(
    changeRowsPerPage,
    changePage,
  );
  const handleControlsChange = useHandleControlsChange(setControls);

  useEffect(() => {
    useUpdateTableValue(setTableValue, initialTableValue, controlsFormData);
  }, [controlsFormData]);

  useEffect(() => {
    setTableValue(initialTableValue);
  }, [initialTableValue]);

  useEffect(() => {
    if (_.size(initialTableValue) > 0 && _.size(headers) == 0) {
      setTableHeaders(
        Object.keys(initialTableValue[0]).map((key) => ({
          name: key,
          label: startCase(key),
        })),
      );
    }
  }, [initialTableValue, headers]);

  return (
    <TableContainer component={Paper} className={classes.tableRoot}>
      {controls && (
        <Box className={classes.controls}>
          {controls.filter && (
            <Box className={classes.filterControls}>
              <Button
                variant="outlined"
                className={classes.filterControlsButton}
                onClick={() => setShowFilter((state) => !state)}
              >
                Filter
                <FilterAltIcon />
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
          <Box>
            {controls.print && <Button>Print</Button>}
            {controls.export && <Button>Export</Button>}
          </Box>
        </Box>
      )}
      <MuiTable
        classes={{
          root: classes.root,
        }}
        {...props}
      >
        <TableHead className={classes.tableHead}>
          <TableRow>
            {hasCheckBox && (
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
            )}
            {tableHeaders.map(({ name, label }) => {
              return (
                <TableCell className={classes.tableHeadCell} key={name}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableValue?.map((row: any, index: number) => {
            return (
              <TableRow key={index}>
                {hasCheckBox && (
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                )}
                {tableHeaders.map(({ name }) => {
                  return (
                    <TableCell key={name} className={classes.tableCell}>
                      {row?.[name]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        {pagination && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[7, 10, 20]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                count={paginatorInfo?.total}
                rowsPerPage={Number(getRowsPerPage)}
                onPageChange={handleChangePage}
                showFirstButton
                showLastButton
                page={getCurrentPage}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
        )}
      </MuiTable>
      <TableFilter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        fields={tableHeaders}
      />
    </TableContainer>
  );
};
