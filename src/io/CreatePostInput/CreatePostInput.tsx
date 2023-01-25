import React, { useRef, useState } from "react";
import { useCreatePostInputStyles } from "./styles";
import { CreatePostInputProps } from "./types";
import clx from "classnames";
import { PosTitleInput } from "./PostTitleInput/PostTitleInput";
import { Editor } from "./Editor";

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

    return (
        <div className={clx(className, classes.root)}>
            <div className={classes.header}></div>
            <PosTitleInput name={"postTitle"} placeHolder={"This is the title"} />
            <div
                className={clx(
                    classNames?.createPostInput,
                    classes.editor,
                    error && classes.editorError,
                )}
            >
                <Editor />
            </div>
        </div>
    );
};
