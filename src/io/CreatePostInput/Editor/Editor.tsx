import React from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
  const [content, setContent] = React.useState(null);
//   const handleChange = value => {
//     setContent(value);
//   };
  return (
    <div>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={""}
        modules={modules}
        formats={formats}
      />
      <div>word count here</div>
    </div>
  );
};

export default Editor;