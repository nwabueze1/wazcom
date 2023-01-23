import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";

export const Editor = () => {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const classes = useEditorToolbarStyles()
  const handleChange = text => {
    setContent(text);
    setwordCount(content && content.split(" ").length)
  };

  useEffect(() => {
    const words = content.split(" ");
  
    let wordCount = 0;

    words.forEach((word) => {
      if (word.trim() !== ''){
        wordCount++;
      }
    })

    setWordCount(wordCount)
  }, [content])
  
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