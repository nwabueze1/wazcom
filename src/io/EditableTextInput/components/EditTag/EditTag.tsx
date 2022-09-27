import { useEditableTextStyles } from "../../styles";

export const EditTag = (props: any) => {
    const classes = useEditableTextStyles();

    return (
        <div
            key={props.cmd}
            onMouseDown={(evt) => {
                evt.preventDefault();
                document.execCommand(props.cmd, false, props.arg);
            }}
            className={classes.controlIcon}
        >
            {props.icon || props.name}
        </div>
    );
};
