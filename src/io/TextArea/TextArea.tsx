import React, { FC } from "react";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
import { TextAreaProps } from "./types";

export const TextArea: FC<TextAreaProps> = ({ name, value, onChange, minRows }) => {
  const classes = useTextAreaStyles();
  return (
    <div className={classes.root}>
      <TextareaAutosize
        minRows={minRows}
        placeholder={name}
        name={name}
        style={{ width: "100%" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
