import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { BiRefresh } from "react-icons/bi";
import PropsButton from "./components/PropButton";
import { usePropsTableStyles } from "./styles";
import { TablepropsType } from "./types";

const PropsTable: FC<TablepropsType> = ({ tableBody, tableHeader, onReset, onCopyCode }) => {
  const classes = usePropsTableStyles();

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //   "&:nth-of-type(odd)": {
    //     backgroundColor: theme.palette.action.hover,
    //   },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    "&:first-child th": {
      border: 0,
    },
  }));
  return (
    <TableContainer className={classes.tableContainer}>
      <Table sx={{ mt: 0 }}>
        <TableHead>
          <StyledTableRow>
            <TableCell>
              <Typography component={"h4"} fontWeight="bold" fontSize={17} mb={0}>
                Props
              </Typography>
            </TableCell>
          </StyledTableRow>
          <TableRow>
            {tableHeader.map((content, index) => (
              <TableCell key={index}>{content}</TableCell>
            ))}

            <TableCell rowSpan={2} align="right">
              <PropsButton endIcon={<BiRefresh fontSize={15} />} onClick={onReset}>
                Reset
              </PropsButton>
              <PropsButton onClick={onCopyCode}>Copy code</PropsButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((data, i) => (
            <StyledTableRow key={i}>
              {tableHeader.map((content, index) => (
                <TableCell key={index}>{data[content]}</TableCell>
              ))}
              <TableCell colSpan={2}></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropsTable;
