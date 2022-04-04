import { useEffect, useState } from "react";
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
} from "@mui/material";
import _ from "lodash";
import {
  generateNumbersBetweenRange,
  useGetCurrentPage,
  useGetRowsPerPage,
  useHandleChangePage,
  useHandleChangeRowsPerPage,
  useHandleControlsChange,
  useUpdateTableValue,
} from "./helpers";
import { TablePagination, TableControls } from "./components";
import { Filter } from "./types";
import clx from "classnames";

export const Table = ({
  className,
  headers,
  value: initialTableValue,
  hasCheckBox,
  pagination = true,
  changePage,
  rowsPerPage,
  changeRowsPerPage,
  paginatorInfo = { total: 1, currentPage: 1, perPage: 20 },
  controls,
  classNames,
  ...props
}: TableProps) => {
  const classes = useTableStyles();
  const [tableValue, setTableValue] = useState(initialTableValue);
  const [tableHeaders, setTableHeaders] =
    useState<{ name: string; label: string }[]>(headers);
  const [controlsFormData, setControlsFormData] = useState<{
    [key: string]: any;
  }>({});
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // All Handler functions are defined as hooks
  const handleChangePage = useHandleChangePage(changePage);
  const getCurrentPage = useGetCurrentPage(paginatorInfo);
  const getRowsPerPage = useGetRowsPerPage(paginatorInfo, rowsPerPage);
  const handleChangeRowsPerPage = useHandleChangeRowsPerPage(
    changeRowsPerPage,
    changePage,
  );
  const handleControlsChange = useHandleControlsChange(setControlsFormData);

  const handleSelectAllRows = () =>
    setSelectedRows((rows) => {
      if (rows.length === tableValue.length) {
        return [];
      }
      return generateNumbersBetweenRange(initialTableValue.length);
    });

  const handleSelectRow = (index: number) =>
    setSelectedRows((rows) => {
      const item = rows.findIndex((row) => row == index);
      if (item !== -1) {
        rows.splice(item, 1);
        return [...rows];
      }
      return [...rows, index];
    });

  useEffect(() => {
    useUpdateTableValue(
      setTableValue,
      initialTableValue,
      controlsFormData,
      filters,
    );
  }, [controlsFormData, filters]);

  useEffect(() => {
    setTableValue(initialTableValue);
  }, [initialTableValue]);

  useEffect(() => {
    if (_.size(initialTableValue) > 0 && _.size(headers) == 0) {
      setTableHeaders(
        Object.keys(initialTableValue[0]).map((key) => ({
          name: key,
          label: key,
        })),
      );
    }
  }, [initialTableValue, headers]);

  return (
    <div className={clx(classes.tableRoot, className)}>
      {controls && (
        <TableControls
          handleControlsChange={handleControlsChange}
          setShowFilter={setShowFilter}
          controls={controls}
          tableValues={tableValue}
          controlsFormData={controlsFormData}
          showFilter={showFilter}
          fields={tableHeaders}
          values={initialTableValue}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <TableContainer component={Paper}>
        <MuiTable
          classes={{
            root: classes.root,
          }}
          {...props}
        >
          <TableHead className={clx(classes.tableHead, classNames?.tableHead)}>
            <TableRow>
              {hasCheckBox && (
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={handleSelectAllRows}
                    checked={selectedRows.length === tableValue.length}
                  />
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
                <TableRow key={index} className={classNames?.tableBody}>
                  {hasCheckBox && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onChange={() => handleSelectRow(index)}
                      />
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
            <TableFooter className={classNames?.tableFooter}>
              <TableRow>
                <TablePagination
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  count={paginatorInfo?.total}
                  rowsPerPage={Number(getRowsPerPage)}
                  onPageChange={handleChangePage}
                  page={getCurrentPage}
                />
                {/* <MuiTablePagination
                  rowsPerPageOptions={[7, 10, 20]}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  count={paginatorInfo?.total}
                  rowsPerPage={Number(getRowsPerPage)}
                  onPageChange={handleChangePage}
                  page={getCurrentPage}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                /> */}
              </TableRow>
            </TableFooter>
          )}
        </MuiTable>
      </TableContainer>
    </div>
  );
};
