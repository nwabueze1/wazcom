import React, {useState} from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";

export const Editor = () => {
  const [content, setContent] = useState(null);
  const [wordCount, setwordCount] = useState(0);
  const classes = useEditorToolbarStyles()
  const handleChange = text => {
    setContent(text);
    setwordCount(content && content.split(" ").length)
  };
  return (
    <div className={classes.root}>
      <EditorToolbar />
      <div className={classes.editor}>
        <ReactQuill style={{ outline: 'none'}}
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder={""}
          modules={modules}
          formats={formats}
        />
        <div>
          <InsertButton />
        </div>
      </div>
       
      <div className={classes.wordCount}>
          {wordCount}/1000 words
      </div>
    </div>
  );
};

export default Editor;