import { Collapse } from "@mui/material";
import { useState, FC, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { EditTag } from "./components/EditTag/EditTag";
import { contols } from "./data";
import { useEditableTextStyles } from "./styles";
import { EditableTextInputProps } from "./types";

export const EditableTextInput: FC<EditableTextInputProps> = ({ html, setHtml }) => {
    const [fieldState, setFieldState] = useState<{
        editable?: boolean;
        html?: string;
    }>({
        html: "<p><p>",
        editable: true,
    });
    const [collapse, setCollapse] = useState(false);
    const classes = useEditableTextStyles();
    const sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "h2"],
        allowedAttributes: { a: ["href"] },
    };

    useEffect(() => {
        setFieldState(fieldState => ({ ...fieldState, html }))
    }, [])

    const handleChange = (evt: any) => {
        setFieldState({ html: evt.target.value });
        if (setHtml)
            setHtml(evt.target.value);
    };

    const sanitize = () => {
        sanitizeHtml(fieldState?.html || "", sanitizeConf)
    };

    const handleBlur = () => {
        setCollapse(false);
        sanitize();
    };
    const handleFocus = () => {
        setCollapse(true);
    };

    return (
        <div className={classes.root}>
            <ContentEditable
                className={classes.editableTextInput}
                tagName="pre"
                html={fieldState?.html ?? "<p></p>"}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
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
