import * as React from "react";
import { InputLabel, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { RichTextInputProps } from "./types";
import { getFeedbackVariant } from "helpers/io";
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
  label,
  apiKey,
  value,
  upload,
  onChange,
  feedback,
  Loader
}) => {
  const classes = useRichInputStyles();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleContentChange = (content:string) => {
    onChange?.({ name: name as string, value: content })
  }

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <div className={classes.editor}>
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
      </div>
      {feedback && (
        <Typography
          className={clx(
            classes.feedback,
            getFeedbackVariant(classes, feedback),
          )}
        >
          {feedback.text}
        </Typography>
      )}
      {loading && Loader}
    </div>
  );
};
