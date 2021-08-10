import React, { FC } from "react";
import { useStyles } from "./styles";
import { TextProps } from "./types";
import clx from "classnames";
import { InputLabel, OutlinedInput } from "@material-ui/core";
import { startCase } from "lodash";

const ZxText: FC<TextProps> = ({
  className,
  error,
  label,
  type,
  name,
  source,
  onBlur,
  onChange,
  placeholder,
}) => {
  const classes = useStyles();

  return (
    <div className={clx(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={source ?? name} shrink>
        {label}
      </InputLabel>
      <OutlinedInput
        type={type}
        name={source ?? name}
        placeholder={placeholder ?? (source && startCase(source))}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        className={clx(classes.input, className)}
      />
    </div>
  );
};

export default ZxText;
