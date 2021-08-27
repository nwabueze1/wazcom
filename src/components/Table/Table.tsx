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
import { Button } from "../Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTableStyles } from "./styles";
import TextField from "@material-ui/core/TextField";

interface fieldProps {
  action?: any;
  choice?: any;
  handleChangeInput: (
    index: number,
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => void;
}

const BasicTable: FC<fieldProps> = ({ handleChangeInput }) => {
  const [inputFields, setInputField] = useState([
    {
      day: "",
      start: "",
      end: "",
      action: "",
    },
  ]);

  const classes = useTableStyles();

  const handleAddFields = () => {
    setInputField([
      ...inputFields,
      {
        day: "",
        start: "",
        end: "",
        action: "",
      },
    ]);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
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
          {inputFields.map((inputFields, index) => (
            <TableRow key={index}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                <FormControl>
                  <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                  <Select
                    name="choice"
                    id="demo-simple-select-outlined"
                    value={
                      inputFields.day === ""
                        ? "Pick a day / days"
                        : inputFields.day
                    }
                    onChange={(event) => handleChangeInput(index, event)}
                    className={classes.select}
                  >
                    <MenuItem value="Pick a day / days">
                      <em>Pick a day / days</em>
                    </MenuItem>
                    <MenuItem value={10}>Monday</MenuItem>
                    <MenuItem value={20}>Tuesday</MenuItem>
                    <MenuItem value={30}>Wednesday</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                <TextField
                  name="start"
                  onChange={(event) => handleChangeInput(index, event)}
                  type="time"
                />
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                <TextField
                  name="end"
                  onChange={(event) => handleChangeInput(index, event)}
                  type="time"
                />
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {index >= 1 ? (
                  <DeleteIcon
                    style={{ color: "red", fontSize: "33", cursor: "pointer" }}
                    onClick={() => handleRemoveFields(index)}
                  />
                ) : (
                  inputFields.action
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        className={classes.addTable}
        size="small"
        onClick={() => handleAddFields()}
      >
        <AddIcon /> Add More
      </Button>
    </TableContainer>
  );
};
export default BasicTable;
