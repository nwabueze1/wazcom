import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import theme from "theme";
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
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(Menu: string, Schedule: string, day: string) {
  return { Menu, Schedule, day };
}

const rows = [createData("Breakfast", "08:00am-10:00am", "yesterday")];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const MenuTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Menu</StyledTableCell>
            <StyledTableCell>Todays Schedule</StyledTableCell>
            <StyledTableCell>Last modified</StyledTableCell>
            <StyledTableCell>Active</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Menu}>
              <StyledTableCell component="th" scope="row"></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Yesterday</StyledTableCell>
              <StyledTableCell>
                <Toggle />
              </StyledTableCell>
              <StyledTableCell>
                <CreateIcon />
                <DeleteIcon
                  style={{
                    color: theme.design.colors.red70,
                    marginLeft: theme.spacing(2.4),
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
