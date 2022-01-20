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
} from "@mui/material";

export const Table = ({ headers, data:initialTableData, hasCheckBox, ...props }: TableProps) => {
  const classes = useTableStyles();
  const [tableData, setTableData] = useState(initialTableData);

  useEffect(() => {
    setTableData(initialTableData);
    console.log(initialTableData);
  }, [initialTableData]);

  return (
    <TableContainer component={Paper}>
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
            {headers.map(({ name, label }) => {
              return (
                <TableCell className={classes.tableHeadCell} key={name}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row: any, index: number) => {
            return (
              <TableRow key={index}>
                {hasCheckBox && (
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                )}
                {headers.map(({ name }) => {
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
      </MuiTable>
    </TableContainer>
  );
};
