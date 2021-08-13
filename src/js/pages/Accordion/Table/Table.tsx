import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 681,
  },
  tableCont: {
    border: "10px",

    margin: theme.spacing(3),
  },
  tableHead: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "18px",
    padding: theme.spacing(2, 1),
    backgroundColor: theme.design.colors.gray30,
    color: theme.design.colors.pureblack,
    border: `2px solid ${theme.design.colors.gray60}`,
    textAlign: "center",
  },
  tableCell: {
    fontFamily: "Nunito",

    fontSize: "16px",
    padding: theme.spacing(2, 1),
    color: theme.design.colors.pureblack,
    border: `2px solid ${theme.design.colors.gray60}`,
    textAlign: "center",
  },
  select: {
    margin: "0px",
    padding: theme.spacing(1, 9),

    "&:before": {
      borderColor: "red",
    },
  },
}));

function createData(
  day: string | number,
  start: string | number,
  end: string | number,
  action: string | number,
) {
  return { day, start, end, action };
}

const rows = [
  createData("Pick a day/days", "enter start time", "Enter end time", ""),
];

export default function BasicTable() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <TableContainer component={Paper} className={classes.tableCont}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Days/No of Days</TableCell>
            <TableCell className={classes.tableHead} align="right">
              Start time
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Ent Time
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.day}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Pick a day / days
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.start}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.end}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
