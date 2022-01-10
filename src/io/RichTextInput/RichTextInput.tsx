import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { RichTextInputProps } from "./types";

export const plugins = [
  "advlist autolink lists link image code",
  "charmap print preview anchor help",
  "searchreplace visualblocks code",
  "insertdatetime media table paste wordcount",
];

export const toolbar = [
  "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help",
];

export const RichTextInput: React.FC<RichTextInputProps> = ({
  apiKey,
  value,
  handleContentChange,
  upload,
  Loader
}) => {
  const classes = useRichInputStyles();
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <div className={classes.root}>
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
          file_picker_callback: (cb: any) => {
            upload?.(cb, setLoading);
          },
          plugins,
          toolbar,
        }}
        onEditorChange={handleContentChange}
      />
      {loading && Loader}
    </div>
  );
};
