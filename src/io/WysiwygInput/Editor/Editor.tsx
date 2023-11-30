import React, { useEffect, useRef, useState } from "react";
import { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorStyles } from "./styles";
import { EditorProps } from "./types";
import { createImageSrcset, imageSizes } from "./helper";

export const Editor: React.FC<EditorProps> = ({ content, handleChange, embed }) => {
  const quillRef = useRef<any>(null);
  const [reactQuill, setReactQuill] = useState<any>();

  const classes = useEditorStyles();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-quill").then((mod) => {
        setReactQuill(mod);
      });
    }
  }, []);

  useEffect(() => {
    if (!embed) return;
    handleEmbed(embed);
  }, [embed]);

  const handleEmbed = (embed: { type: string; value: string | any }) => {
    const quillObj = quillRef?.current?.getEditor();
    const range = quillObj?.selection?.savedRange;
    const editorParent = document.getElementById("editorParent");
    const scrollTop = editorParent?.scrollTop;

    const { type, value } = embed;
    if (type === "link") {
      const [text, url] = value.split("||>>");
      quillObj.insertText(range.index, text, "user");
      quillObj.setSelection(range.index, text.length);
      quillObj.theme.tooltip.edit("link", url);
      quillObj.theme.tooltip.save();
      if (editorParent) {
        editorParent.scrollTop = scrollTop as number;
      }
    } else if (type === "image") {
      const imgTag = value?.caption
        ? `<div><img src="${value?.src}" srcset="${createImageSrcset(value)}" alt="${
            value?.alternative_text
          }" sizes="${imageSizes}"/>
      <em>${value?.caption}</em>
      </div>`
        : `<img src="${value?.src}" srcset="${createImageSrcset(value)}" alt="${
            value?.alternative_text
          }" sizes="${imageSizes}"/>
      `;
      quillObj.clipboard.dangerouslyPasteHTML(range.index, imgTag, "user");
    } else quillObj?.editor?.insertEmbed(range.index, type, value);

    handleChange(quillObj?.root?.innerHTML);
  };

  return (
    <div className={classes.root}>
      <div className={classes.editor} id="editorParent">
        {reactQuill && (
          <reactQuill.default
            id="editor"
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={handleChange}
            placeholder={"Add content"}
            modules={modules}
            formats={formats}
            className={classes.quillEditor}
            scrollingContainer={"#editorParent"}
          />
        )}
      </div>
      <div className={classes.wordCount}>
        {content.trim().length === 0 ? 0 : content.split(" ").length} words
      </div>
    </div>
  );
};

export default Editor;
