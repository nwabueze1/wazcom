import { Collapse } from "@mui/material";
import { useState, FC } from "react";
import ContentEditable from "react-contenteditable";
import { EditTag } from "./components/EditTag/EditTag";
import { contols } from "./data";
import { useEditableTextStyles } from "./styles";
import { EditableTextInputProps } from "./types";

export const EditableTextInput: FC<EditableTextInputProps> = ({
    html,
    setHtml,
    placeholder,
    heading,
}) => {
    const [fieldState, setFieldState] = useState<{
        editable?: boolean;
        html?: string;
    }>({
        html: !html && html === "" ? placeholder : html,
        editable: true,
    });
    const [collapse, setCollapse] = useState(false);
    const classes = useEditableTextStyles();

    const handleChange = (evt: any) => {
        setFieldState({ html: evt.target.value });
        if (setHtml) setHtml(evt.target.value);
    };

    const handleFocus = () => {
        if (fieldState.html?.trim() === placeholder) {
            setFieldState({ html: "" });
        }
        setCollapse(true);
    };

    const handleBlur = () => {
        setCollapse(false);
    };

    return (
        <div className={classes.root}>
            <ContentEditable
                className={classes.editableTextInput}
                tagName="pre"
                html={fieldState?.html ?? "<p></p>"}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={heading ? { fontSize: 30, fontweight: 600, height: 60 } : {}}
            />
            <Collapse in={collapse}>
                <div className={classes.editTagContainer}>
                    {contols.map((control, idx) => (
                        <EditTag key={idx} {...control} />
                    ))}
                </div>
            </Collapse>
        </div>
    );
};
