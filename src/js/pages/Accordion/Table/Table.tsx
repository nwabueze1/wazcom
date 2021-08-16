import React, { useState, FC } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "../../Button/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./Style";

interface fieldProps {
  day: string | number;
  start: string | number;
  end: string | number;
  action?: any;
}

const BasicTable: FC<fieldProps> = () => {
  const [inputField, setInputField] = useState([
    {
      day: "Pick a day/days",
      start: "Enter Start time",
      end: "Enter End Time",
      action: "",
    },
  ]);

  const classes = useStyles();
  const [day, setDay] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDay(event.target.value as string);
  };

  const handleAddFields = () => {
    setInputField([
      ...inputField,
      {
        day: "Pick a day/days",
        start: "Enter Start time",
        end: "Enter End Time",
        action: "",
      },
    ]);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };

  return (
    <TableContainer className={classes.tableCont}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Days/No of Days</TableCell>
            <TableCell className={classes.tableHead} align="right">
              Start time
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              End Time
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputField.map((inputField, index) => (
            <TableRow key={index}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <FormControl>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Pick a day / days
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={day}
                    onChange={handleChange}
                    label="Age"
                    className={classes.select}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={inputField.day}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {inputField.start}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {inputField.end}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {index >= 1 ? (
                  <DeleteIcon
                    style={{ color: "red", fontSize: "33", cursor: "pointer" }}
                    onClick={() => handleRemoveFields(index)}
                  />
                ) : (
                  inputField.action
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        className={classes.addTable}
        status="disable"
        size="small"
        onClick={() => handleAddFields()}
      >
        <AddIcon /> Add More
      </Button>
    </TableContainer>
  );
};
export default BasicTable;
