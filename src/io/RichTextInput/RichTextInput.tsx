import * as React from "react";
import { InputLabel } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { RichTextInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";

const plugins = [
  "advlist autolink lists link image code",
  "charmap print preview anchor help",
  "searchreplace visualblocks code",
  "insertdatetime media table paste wordcount",
];

const toolbar = [
  "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help",
];

export const RichTextInput: React.FC<RichTextInputProps> = ({
  name,
  className,
  classNames,
  helperText,
  label,
  apiKey,
  value,
  upload,
  onChange,
  error,
  feedback,
  Loader,
  ...props
}) => {
  const classes = useRichInputStyles();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleContentChange = (content: string) => {
    onChange?.({ name: name as string, value: content });
  };

  // const displayMediaLibrary = (field_name:any, url:string, type:any, win:any) => {
  //   tinymce.activeEditor.windowManager.open({
  //     title: 'Browse Image',
  //     file: "yourbrowser.php?field=" + field_name + "&url=" + url,
  //     width: 450,
  //     height: 305,
  //     resizable : "no",
  //     inline : "yes",
  //     close_previous : "no",
  //     buttons: [{
  //         text: 'Insert',
  //         classes: 'widget btn primary first abs-layout-item',
  //         disabled: true,
  //         onclick: 'close'
  //     }, {
  //         text: 'Close',
  //         onclick: 'close',
  //         window : win,
  //         input : field_name
  //     }]
  // });
  // return false;
  // }

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={(classNames?.label as string) ?? ""}
          htmlFor={name}
        >
          {label} <p className={classes.required}>{props.required ? " *" : ""}</p>
        </InputLabel>
      )}
      <div
        className={clx(
          classNames?.richTextInput,
          classes.editor,
          error && classes.editorError
        )}
      >
        <Editor
          value={value}
          apiKey={apiKey}
          init={{
            height: 500,
            menubar: true,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            paste_data_images: true,
            // file_picker_callback: (cb: any) => {
            //   const input = document.createElement('input');
            //   input.setAttribute('type', 'file');
            //   upload?.(cb, setLoading);
            // },
            // file_browser_callback:displayMediaLibrary,
            
            plugins,
            toolbar,
          }}
          onEditorChange={handleContentChange}
        />
      </div>
      {helperText}
      {feedback && displayFeedback(feedback)}
      {loading && Loader}
    </div>
  );
};
