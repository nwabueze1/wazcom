import React, {useRef, useState} from "react";
import { InputLabel } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { RichTextInputProps, ImageProperties } from "./types";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { EditImageDialog } from "./EditImageDialog/EditMediaDialog";
import { EditorMediaLibrary } from "./EditorMediaLibrary/EditorMediaLibrary";

const plugins = [
  "advlist autolink lists link code",
  "charmap print preview anchor help",
  "searchreplace visualblocks code",
  "insertdatetime media table paste wordcount",
];

const toolbar = [
  "undo redo | formatselect | link image | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help | imageSelector",
];

export const RichTextInput: React.FC<RichTextInputProps> = ({
  name,
  className,
  classNames,
  helperText,
  label,
  apiKey,
  value,
  onChange,
  error,
  feedback,
  Loader,
  ...props
}) => {
  const classes = useRichInputStyles();

  const [mediaOpen, setMediaOpen] = useState<boolean>(false);
  const [image, setImage] = useState<ImageProperties>({
    url: "",
    width: "100",
    height: "100",
    title: "",
  });

  const editorRef = useRef<any>();

  const handleContentChange = (content: string) => {
    onChange?.({ name: name as string, value: content });
  };

  const handleSelectImage = (value: ImageProperties) => {
    setMediaOpen(false);
    setImage({ ...image, url: value?.url, title: value?.title });
  };
  
  const handleMediaLibraryClose = () => {
    setMediaOpen(false);
  };

  const handleDialogClose = () => {
    setImage({ ...image, url: "" });
  };

  const insertImage = () => {
    if (image.url)
      editorRef.current.insertContent(
        `<img src=${image?.url} width=${image?.width} height=${image?.height} />`
      );
    setImage({
      url: "",
      title: "",
      width: "100",
      height: "100",
    });
  };

  const editImage = (name: string, value: string) => {
    setImage({ ...image, [name]: value });
  };

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={(classNames?.label as string) ?? ""}
          htmlFor={name}
        >
          {label}{" "}
          <p className={classes.required}>{props.required ? " *" : ""}</p>
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
          onInit={(event, editor) => {
            (editorRef.current = editor), event;
          }}
          init={{
            height: 500,
            menubar: true,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            paste_data_images: true,
            setup: (editor: any) => {
              editor.ui.registry.addButton("imageSelector", {
                icon: "image",
                onAction: () => setMediaOpen(true),
              });
            },
            plugins,
            toolbar,
          }}
          onEditorChange={handleContentChange}
        />
        <EditorMediaLibrary
          mediaOpen={mediaOpen}
          handleClose={handleMediaLibraryClose}
          handleSelect={handleSelectImage}
          name={name}
        />
      </div>
      {image.url && (
        <EditImageDialog
          image={image}
          handleEditImage={editImage}
          handleDialogClose={handleDialogClose}
          handleInsertImage={insertImage}
        />
      )}
      {helperText}
      {feedback && displayFeedback(feedback)}
      {Loader}
    </div>
  );
};
