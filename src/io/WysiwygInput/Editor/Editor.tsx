import React, {useState, useEffect, useRef, useCallback} from "react";
import ReactQuill from "react-quill";
import { EditorToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { useEditorToolbarStyles } from './styles';
import { InsertButton } from "./InsertButton/InsertButton";
import { EditorProps } from './types';


export const Editor: React.FC<EditorProps> = ({ handleContent }) => {
  const [content, setContent] = useState<string>('');
  const [textIndex, setTextIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [embedUrl, setEmbedUrl] = useState<string>('')
  const [socialEmbed, setSocialEmbed] = useState('')
  const [editorHeight, setEditorHeight] = useState(0)
  const [offSet, setOffSet] = useState(0)
  const [screenOffset, setScreenOffset] = useState(0)
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
   setToolbarPosition(editorHeight + offSet - screenOffset - 31.5)
  }, [editorHeight])
  
  useEffect(() => {
    const words = content.split(" ");
    let wordCount = 0;
    words.forEach((word:string) => {
      if (word.trim() !== ''){
        wordCount++;
      }
    })
    setWordCount(wordCount)
    handleToolbarPosition()
  }, [content])

  useEffect(() => {
    handleVideoEmbed() 
  }, [embedUrl])

  useEffect(() => {
    handleSocialEmbed() 
  }, [socialEmbed])

  const handleVideoEmbed = () => {
    const editorRef = quillRef.current.getEditor();
    embedUrl.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, embedUrl);
    editorRef.setSelection(textIndex + 1);
  };
  
  const handleSocialEmbed = () => {
    const editorRef = quillRef.current.getEditor();
    socialEmbed.length > 0 && editorRef.clipboard.dangerouslyPasteHTML(textIndex, socialEmbed)
    editorRef.setSelection(textIndex + 1);
  };

  const handleToolbarPosition = async () => {
    const rect = document.getSelection().baseNode.parentNode.getBoundingClientRect()
    setScreenOffset(rect.y)

    var contentDiv = document.querySelector('#editor')
    const offset = contentDiv.getBoundingClientRect().y;
    setOffSet(offset)

    const editorFieldHeight = contentDiv.clientHeight;
    setEditorHeight(editorFieldHeight)

    const diff = rect.y - offset;
    setToolbarPosition(diff)
  }

  return (
    <div className={classes.root}>
        {/* {console.log(toolbarPosition.x)} */}
        <div className={classes.editor}>
          <div className={classes.floatingBar} style={{top: toolbarPosition < 0 ? 0: toolbarPosition-15, left: 0}}>
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