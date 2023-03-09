import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorStyles } from "./styles";
import { EditorProps } from "./types";

export const Editor: React.FC<EditorProps> = ({ content, handleChange, embed }) => {
    const quillRef = useRef<any>(null);

    const classes = useEditorStyles();

    useEffect(() => {
        if (!embed) return;
        handleEmbed(embed);
    }, [embed]);

    const handleEmbed = (embed: { type: string; value: string }) => {
        const quillObj = quillRef?.current?.getEditor();
        const range = quillObj?.selection?.savedRange;

        const { type, value } = embed;
        if (type === "link") {
            const [text, url] = value.split("||>>");
            quillObj.insertText(0, text, "user");
            quillObj.setSelection(0, text.length);
            quillObj.theme.tooltip.edit("link", url);
            quillObj.theme.tooltip.save();
        } else quillObj.editor.insertEmbed(range.index, type, value);
    };

    return (
        <div className={classes.root}>
            <div className={classes.editor}>
                <EditorToolbar />
                <ReactQuill
                    id="editor"
                    ref={quillRef}
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    placeholder={"Add content"}
                    modules={modules}
                    formats={formats}
                    className={classes.quillEditor}
                />
            </div>
            <div className={classes.wordCount}>
                {content.trim().length === 0 ? 0 : content.split(" ").length}/1000 words
            </div>
        </div>
    );
};

export default Editor;
