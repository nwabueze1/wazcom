import React, {useState, useEffect, useRef, useCallback} from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";
import { EditorProps } from './types';


export const Editor: React.FC<EditorProps> = ({ 
  handleContent,
  handleImageModalState,
  embedUrl, 
  handleEmbedUrl,
}) => {

  const [content, setContent] = useState<string>('');
  const [textIndex, setTextIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [editorHeight, setEditorHeight] = useState(0)
  const [toolbarPosition, setToolbarPosition] = useState(0)
  const quillRef = useRef();

  const classes = useEditorToolbarStyles()

  const handleChange =async (text: string) => {
    const editorRef = quillRef.current.getEditor();
    const range = await editorRef.getSelection();
    const position = range ? range.index : 0;
    setContent(text);
    setTextIndex(position);
  };

  useEffect(() => {
    handleContent(content)
  }, [content])
  
  useEffect(() => {
   setToolbarPosition(editorHeight -40)
  }, [editorHeight])
  
  useEffect(() => {
    const words = content.split(" ");
    let wordCount = 0;
    words.forEach((word:string) => {
      if (word.trim() !== ''){
        wordCount++;
      }
    })
    const contentDiv = document.querySelector('#editor')
    const editorFieldHeight = contentDiv.clientHeight;
    setEditorHeight(editorFieldHeight)
    
    setWordCount(wordCount)

    setToolbarPosition(editorHeight - 40)
  }, [content])

  const handleEmbed = () => {
    const editorRef = quillRef.current.getEditor();
    // embedUrl?.type === 'image' ? 
    // embedUrl?.url.length > 0 && editorRef.insertEmbed(textIndex, 'image', `${embedUrl?.url}`) :
    // embedUrl?.url.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, embedUrl?.url);
    editorRef.insertEmbed(textIndex, 'image', 'https://imagekit.io') 
    editorRef.setSelection(textIndex + 1);
  };

    () => handleEmbedUrl(handleEmbed)

  return (
    <div className={classes.root}>
        <div className={classes.editor}>
          <div className={classes.floatingBar} style={{top: toolbarPosition, left: 0}}>
          <EditorToolbar />
          </div>
          <ReactQuill
            id="editor"
            ref={quillRef}
            theme= "snow"
            value={content}
            onChange={handleChange}
            placeholder={""}
            modules={modules}
            formats={formats}
            className={classes.quillEditor}
          />
          <div>
            <InsertButton handleImageModalState={handleImageModalState} />
          </div>
        </div>
          <div className={classes.wordCount}>
              {wordCount}/1000 words
          </div>
    </div>
  );
};

export default Editor;