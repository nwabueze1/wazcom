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

export const Table = ({ headers, data, ...props }: TableProps) => {
  const classes = useTableStyles();

  return (
    <TableContainer component={Paper}>
      <MuiTable
        classes={{
          root: classes.root,
        }}
        {...props}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            {headers.map(({ name, label }) => {
              return <TableCell key={name}>{label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {headers.map(({ name }) => {
                  return <TableCell key={name}>{row?.[name]}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
