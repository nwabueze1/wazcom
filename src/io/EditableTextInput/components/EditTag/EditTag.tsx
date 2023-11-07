import { FC } from "react";
import { useEditableTextStyles } from "../../styles";
import { EditTagProps } from "./types";

export const EditTag: FC<EditTagProps> = ({ name, cmd, arg, Icon }) => {
  const classes = useEditableTextStyles();

  return (
    <div
      key={cmd}
      onMouseDown={(evt) => {
        evt.preventDefault();
        document.execCommand(cmd ?? "", false, arg);
      }}
      className={classes.controlIcon}
    >
      {Icon ? <Icon /> : name}
    </div>
  );
};
