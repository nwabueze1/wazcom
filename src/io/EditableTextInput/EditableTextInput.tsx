import { Collapse } from "@mui/material";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { EditTag } from "./components/EditTag/EditTag";
import { contols } from "./data";
import { useEditableTextStyles } from "./styles";

export const EditableTextInput = () => {
    const [fieldState, setFieldState] = useState<{
        editable?: boolean;
        html?: string;
    }>({
        html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
        editable: true,
    });
    const [collapse, setCollapse] = useState(true);
    const classes = useEditableTextStyles();

    const handleChange = (evt: any) => {
        setFieldState({ html: evt.target.value });
    };

    const sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
        allowedAttributes: { a: ["href"] },
    };

    const sanitize = () => {
        setFieldState({ html: sanitizeHtml(fieldState?.html || "", sanitizeConf) });
    };

    const handleBlur = () => {
        setCollapse(false);
        sanitize();
    };
    const handleFocus = () => {
        setCollapse(true);
    };

    return (
        <div>
            <ContentEditable
                className={classes.editableTextInput}
                tagName="pre"
                html={fieldState?.html ?? "<p></p>"}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <Collapse in={false}>
                <div className={classes.editTagContainer}>
                    {contols.map((control, idx) => (
                        <EditTag key={idx} {...control} />
                    ))}
                </div>
            </Collapse>
        </div>
    );
};
