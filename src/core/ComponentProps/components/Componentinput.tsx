import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useTextFieldStyles } from "./styles";

interface IProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string | number;
}
const ComponentInput: FC<IProps> = ({ value, onChange }) => {
  const classes = useTextFieldStyles();
  return <TextField onChange={onChange} value={value} className={classes.root}></TextField>;
};

export default ComponentInput;
