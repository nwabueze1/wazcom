import {  FC } from "react";
import { useInputStyles } from "./styles";
import clx from "classnames";
import {TextField} from "@mui/material";
import {  InputGroupProps } from "./types";

export const InputGroup: FC<InputGroupProps> = ({
  onChange,
  label,
  value,
  variant,
  inverted,
  handleChange,
}) => {
  const classes = useInputStyles();

  return (
    <form className={clx(classes.root, inverted ? classes.inverted : "")}>
      {variant == "textfield" ? (
        <p className={classes.span}>{label}</p>
      ) : (
        <div className={classes.buttonParent}>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            placeholder="No file chosen"
            className={classes.file}
          />

          <label className={classes.label} htmlFor="file">
            Upload Image
          </label>
        </div>
      )}
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={variant === "textfield" ? "input Text" : "No file chosen"}
        onChange={onChange}
        fullWidth={true}
        value={value}
      />
    </form>
  );
};
