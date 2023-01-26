import React, {useState, useEffect, useRef, useCallback} from "react";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";
import "./styles.css";
import { EditorProps } from './types';

export const Editor: React.FC<EditorProps> = ({ handleContent }) => {
  const [content, setContent] = useState<string>('');
  const [textIndex, setTextIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [embedUrl, setEmbedUrl] = useState<string>('')
  const [socialEmbed, setSocialEmbed] = useState('')
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
    handleVideoEmbed() 
  }, [embedUrl])

  useEffect(() => {
    handleSocialEmbed() 
  }, [socialEmbed])

  const handleVideoEmbed = async () => {
    const editorRef = quillRef.current.getEditor();
    embedUrl.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, embedUrl);
    editorRef.setSelection(textIndex + 1);
  };
  
  const handleSocialEmbed =async () => {
    const editorRef = quillRef.current.getEditor();
    socialEmbed.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, socialEmbed)
    editorRef.setSelection(textIndex + 1);
  };

  return (
    <div className={classes.root}>
      <EditorToolbar />
        <div className={classes.editor}>
          <ReactQuill
            ref={quillRef}
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
          <div className={classes.wordCount}>
              {wordCount}/1000 words
          </div>
        </div>
    </div>
  );
};

export default Editor;