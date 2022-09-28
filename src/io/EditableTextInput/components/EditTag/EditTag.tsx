import { FC } from "react"
import { useEditableTextStyles } from "../../styles";
import { EditTagProps } from "./types";

export const EditTag: FC<EditTagProps> = (props) => {
    const classes = useEditableTextStyles();

    return (
        <div
            key={props.cmd}
            onMouseDown={(evt) => {
                evt.preventDefault();
                document.execCommand(props?.cmd ?? "", false, props.arg);
            }}
            className={classes.controlIcon}
        >
            {props.icon || props.name}
        </div>
    );
};
