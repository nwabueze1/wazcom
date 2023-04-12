import {
  Chip,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Tag } from "../../build";
import { FC, memo } from "react";
import { BiRefresh } from "react-icons/bi";
import PropsButton from "./components/PropButton";
import { usePropsTableStyles } from "./styles";
import { IComponentProps, TablepropsType } from "./types";

const ComponentProps: FC<TablepropsType> = ({ body, onReset, onCopyCode }) => {
  const classes = usePropsTableStyles();
  const tableHead: string[] = ["name", "description", "default", "controls"];

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //   "&:nth-of-type(odd)": {
    //     backgroundColor: theme.palette.action.hover,
    //   },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    "&:first-of-type th": {
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
          <TableRow className={classes.tableHeading}>
            {tableHead.map((key, index) => (
              <TableCell key={index} className={classes.tableCell}>
                {key}
              </TableCell>
            ))}

            <TableCell align="right" className={classes.tableCell} sx={{ whiteSpace: "nowrap" }}>
              <PropsButton endIcon={<BiRefresh fontSize={15} />} onClick={onReset}>
                Reset
              </PropsButton>
              <PropsButton onClick={onCopyCode}>Copy code</PropsButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((data, i) => (
            <StyledTableRow key={i}>
              <TableCell className={classes.tableCell}>{data.name}</TableCell>
              <TableCell className={classes.tableCell}>{data.description}</TableCell>
              <TableCell className={classes.tableCell}>
                {data.default && <Tag name={data.default} />}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {data.controls && typeof data.controls === "function"
                  ? data.controls()
                  : data.controls && typeof data.controls !== "function"
                  ? data.controls
                  : "undefined"}
              </TableCell>
              <TableCell></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(ComponentProps);
