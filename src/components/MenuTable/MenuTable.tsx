import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { MenuTableStyles } from "./styles";
import Toggle from "components/Toggle/Toggle";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.design.colors.gray30,
      color: theme.design.colors.black,
      fontSize: "18px",
      fontWeight: "bold",
    },
    body: {
      fontSize: 18,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.design.colors.white,
      },
    },
  }),
)(TableRow);

function createData(Menu: string, Schedule: string, day: string) {
  return { Menu, Schedule, day };
}

const rows = [createData("Breakfast", "08:00am-10:00am", "yesterday")];

export const MenuTable = () => {
  const classes = MenuTableStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Menu</StyledTableCell>
            <StyledTableCell align="center">Todays Schedule</StyledTableCell>
            <StyledTableCell align="center">Last modified</StyledTableCell>
            <StyledTableCell align="center">Active</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Menu}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.Menu}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Schedule}</StyledTableCell>
              <StyledTableCell align="center">Yesterday</StyledTableCell>
              <StyledTableCell className={classes.active}>
                <Toggle />
              </StyledTableCell>
              <StyledTableCell align="center">
                <CreateIcon />
                <DeleteIcon className={classes.deleteIcon} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
