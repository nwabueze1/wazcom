import { FC } from "react";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
import { TextAreaProps } from "./types";

export const TextArea: FC<TextAreaProps> = ({
  name,
  value,
  onChange,
  minRows,
}) => {
  const classes = useTextAreaStyles();
  return (
    <div className={classes.root}>
      <TextareaAutosize
        minRows={minRows}
        placeholder={name}
        className={classes.textarea}
        name={name}
        style={{ width: "100%" }}
        value={value}
        onChange={(e) =>
          onChange?.({ name: name as string, value: e.target.value })
        }
      />
    </div>
  );
};
