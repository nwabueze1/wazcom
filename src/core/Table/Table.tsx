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

export const Table = ({ headers, value:initialTableValue, hasCheckBox, ...props }: TableProps) => {
  const classes = useTableStyles();
  const [tableValue, setTableValue] = useState(initialTableValue);

  useEffect(() => {
    setTableValue(initialTableValue);
    console.log(initialTableValue);
  }, [initialTableValue]);

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
          {tableValue?.map((row: any, index: number) => {
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
