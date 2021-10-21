import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { FC } from "react";
import { BaseTheme } from "theme";
import { Toggle } from "../Toggle/Toggle";
import { MenuTableStyles } from "./styles";
import { MenuTableProps } from "./types";

const StyledTableCell = withStyles((theme: BaseTheme) =>
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

const StyledTableRow = withStyles((theme: BaseTheme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.design.colors.white,
      },
    },
  }),
)(TableRow);

export const MenuTable: FC<MenuTableProps> = ({
  rows,
  editHandler,
  deleteHandler,
}) => {
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
          {rows.map((row, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.Menu}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Schedule}</StyledTableCell>
              <StyledTableCell align="center">{row.day}</StyledTableCell>
              <StyledTableCell align="center">
                <div className={classes.active}>
                  <Toggle name="" />
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <CreateIcon onClick={() => editHandler(id)} />
                <DeleteIcon
                  onClick={() => deleteHandler(id)}
                  className={classes.deleteIcon}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
