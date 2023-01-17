import React, { useRef, useState } from "react";
import { InputLabel } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useCreatePostInputStyles } from "./styles";
import { CreatePostInputProps, ImageProperties } from "./types";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";

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

export const CreatePostInput: React.FC<CreatePostInputProps> = ({
    name,
    className,
    classNames,
    helperText,
    label,
    value,
    onChange,
    error,
    feedback,
    Loader,
    client,
    ...props
}) => {
    const classes = useCreatePostInputStyles();

    const [mediaOpen, setMediaOpen] = useState<boolean>(false);

    const editorRef = useRef<Editor | any>();

    const handleContentChange = (content: string) => {
        onChange?.({ name: name as string, value: content });
    };

    // const handleSelectImage = (value: ImageProperties) => {
    //     setMediaOpen(false);
    //     setImage({ ...image, url: value?.url, title: value?.title });
    // };

    const handleMediaLibraryClose = () => {
        setMediaOpen(false);
    };

    const handleDialogClose = () => {
        setImage({ ...image, url: "" });
    };

    const insertImage = () => {
        if (image.url)
            editorRef.current.insertContent(
                `<picture>
        <source media="(min-width: 654px)" srcset=${image?.url} width=${image?.width["tablet"]} height=${image?.height["tablet"]} />
        <source media="(min-width: 354px)" srcset=${image?.url} width=${image?.width["mobile"]} height=${image?.height["mobile"]} />
        <img src=${image?.url} width=${image?.width["desktop"]} height=${image?.height["desktop"]} />
        </picture>`,
            );
        setImage({
            url: "",
            title: "",
            width: { desktop: "100", tablet: "100", mobile: "100" },
            height: { desktop: "100", tablet: "100", mobile: "100" },
        });
    };

    const updateImage = (name: string, value: string, device?: string) => {
        if (device && (name == "width" || name == "height"))
            setImage({ ...image, [name]: { ...image[name], [device]: value } });
        else setImage({ ...image, [name]: value });
    };

    return (
        <div className={clx(className, classes.root)}>
            {label && (
                <InputLabel className={(classNames?.label as string) ?? ""} htmlFor={name}>
                    {label} <p className={classes.required}>{props.required ? " *" : ""}</p>
                </InputLabel>
            )}
            <div
                className={clx(
                    classNames?.richTextInput,
                    classes.editor,
                    error && classes.editorError,
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
                {client && (
                    <EditorMediaLibrary
                        mediaOpen={mediaOpen}
                        handleClose={handleMediaLibraryClose}
                        handleSelect={handleSelectImage}
                        name={name}
                        client={client}
                    />
                )}
            </div>
            {image.url && (
                <EditImageDialog
                    image={image}
                    handleEditImage={updateImage}
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
