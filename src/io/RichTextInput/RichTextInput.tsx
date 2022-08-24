import React, {useRef, useState} from "react";
import { InputLabel, Modal, TextField, Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useRichInputStyles } from "./styles";
import { RichTextInputProps } from "./types";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { GqlMediaLibrary } from "../../gql/GqlMediaLibrary";
import {
  createApolloClient,
  GET_IMAGES,
  UPLOAD_IMAGE,
} from "../../helpers/graphQL";

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
  const [loading, ] = React.useState<boolean>(false);

  const [mediaOpen, setMediaOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgWidth, setImgWidth] = useState<string>("100");
  const [imgHeight, setImgHeight] = useState<string>("100");
  const [imgTitle, setImgTitle] = useState<string>("");
  const [, setEvent] = useState()

  const editorRef = useRef<any>()

  const handleContentChange = (content: string) => {
    onChange?.({ name: name as string, value: content });
  };

  const handleSelectImage = ({ value }: { value: any }) => {
    setMediaOpen(false);
    setImgUrl(value?.url);
    setImgTitle(value?.title);
  };
  const handleClose = () => {
    setMediaOpen(false);
  };

  const handleDialogClose = () => {
    setImgUrl("")
  }

  const insertImage = () => {
    if(imgUrl) editorRef.current.insertContent(`<img src=${imgUrl} width=${imgWidth} height=${imgHeight} />`)
    setImgUrl("")
  }

  const onEditorInit = (event: any, editor: any) => {
    setEvent(event)
    editorRef.current = editor
  }

  const editImageDialog = () => {
    return (
      <Modal open={true}>
        <div className={classes.editMediaModal}>
          <p className={classes.editImageHeader}>Edit Image</p>
          <div className={classes.inputContainer}>
          <TextField
          label="Title"
          variant="outlined"
          size="small"
          className={classes.editMediaInput}
            value={imgTitle}
            type="text"
            placeholder="Image Title"
            onChange={(event) => setImgTitle(event.target.value)}
          />
          <TextField
          label="Url"
          variant="outlined"
          size="small"
          className={classes.editMediaInput}
            value={imgUrl}
            type="text"
            placeholder="Image URL"
            onChange={(event) => setImgUrl(event.target.value)}
          />
          <div className={classes.editMediaSizeContainer}>
          <TextField
          label="Width"
          variant="outlined"
          size="small"
          className={classes.editMediaSizeInput}
            value={imgWidth}
            type="number"
            placeholder="Image Width"
            onChange={(event) => setImgWidth(event.target.value)}
          />
          <TextField
          label="Height"
          variant="outlined"
          size="small"
          className={classes.editMediaSizeInput}
            value={imgHeight}
            type="number"
            placeholder="Image Height"
            onChange={(event) => setImgHeight(event.target.value)}
          />
          </div>
          </div>
          <div className={classes.editButtonContainer}>
            <Button onClick={handleDialogClose} className={classes.editMediaCancelBtn}>
              Cancel
            </Button>
            <Button onClick={insertImage} className={classes.editMediaSubmitBtn}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    )
  }

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
          onInit={onEditorInit}
          init={{
            height: 500,
            menubar: true,
            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            paste_data_images: true,
            setup: (editor: any) => {
              editor.ui.registry.addButton('imageSelector', {
                icon: "image",
                onAction: () => setMediaOpen(true)
              });
            },
            plugins,
            toolbar,
          }}
          onEditorChange={handleContentChange}
        />
        <Modal className={classes.mediaLibrary} open={mediaOpen}>
        <div className={classes.wrapper}>
          <GqlMediaLibrary
            config={{
              client: createApolloClient(
                "https://nicodemus.sytbuilder.com/graphql"
              ),
              query: {
                name: GET_IMAGES,
                variables: {
                  page: 1,
                  count: 7,
                },
              },
              upload: {
                name: UPLOAD_IMAGE,
                variables: {},
              },
              viewOnly: true,
            }}
            onChange={handleSelectImage}
            name={name}
            handleClose={handleClose}
          />
        </div>
      </Modal>
      </div>
      {
        imgUrl &&
        editImageDialog()
      }
      {helperText}
      {feedback && displayFeedback(feedback)}
      {loading && Loader}
    </div>
  );
};
