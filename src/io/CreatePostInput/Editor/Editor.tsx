import React, {useState, useEffect} from "react";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";

export const Editor = () => {
  const [content, setContent] = useState<string>('');
  const [wordCount, setWordCount] = useState(0);
  const [embedUrl, setEmbedUrl] = useState<string>('')

  const classes = useEditorToolbarStyles()

  const handleChange = text => {
    setContent(text);
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

  useEffect(() => {
    let newContent = content + embedUrl
   setContent(newContent)  
  }, [embedUrl])
  

  // const handleEmbedInsert = (embedUrl: string) => {
  //   var range = this.quill.getSelection();
  //   if (range) {
  //     if (range.length == 0) {
  //       console.log('User cursor is at index', range.index);
  //     } else {
  //       var text = this.quill.getText(range.index, range.length);
  //       console.log('User has highlighted: ', text);
  //     }
  //   } else {
  //     console.log('User cursor is not in editor');
  //   }
  // }
  
  return (
    <div className={classes.root}>
      <EditorToolbar />
      <div className={classes.editor}>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder={""}
          modules={modules}
          formats={formats}
        />
        <div>
          <InsertButton embedUrl={embedUrl} setEmbedUrl={setEmbedUrl}/>
        </div>
      </div>
       
      <div className={classes.wordCount}>
          {wordCount}/1000 words
      </div>
    </div>
  );
};

export default Editor;