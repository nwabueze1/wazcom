import React, { useState, useEffect } from "react";
import { useCreatePostInputStyles } from "./styles";
import { WysiwygInputProps } from "./types";
import clx from "classnames";
import { PosTitleInput } from "./PostTitleInput/PostTitleInput";
import { Editor } from "./Editor";

export const WysiwygInput: React.FC<WysiwygInputProps> = ({
    name,
    className,
    classNames,
    helperText,
    label,
    value,
    embedUrl,
    onChange,
    error,
    feedback,
    Loader,
    client,
    handleImageModalState,
    ...props
}) => {
    const classes = useCreatePostInputStyles();

    const [editorContent, setEditorContent] = useState('')
    const [postTitle, setPostTitle] = useState('')

    const handleContent = (content: string) => {
        setEditorContent(content)
    }

    const handlePostTitle = (title: string) => {
        setPostTitle(title)
    }

    const handleChange = (e: React.MouseEvent<HTMLElement>) => {
        if (onChange) {
            onChange?.({ name: name ?? "", value: {title: postTitle, content: editorContent} });
        }
    };

console.log(embedUrl?.url)
    return (
        <div>
            <div className={clx(className, classes.root)}>
                <PosTitleInput 
                handlePostTitle={handlePostTitle} 
                placeholder={"This is the title"}
                />
                <div
                    className={clx(
                        classNames?.createPostInput,
                        error && classes.editorError,
                    )}
                >
                    <Editor embedUrl={embedUrl} handleContent={handleContent} handleImageModalState={handleImageModalState} />
                </div>
            </div>
            <div className={classes.postButtonContainer}>
                <button 
                onClick={()=>handleChange}
                className={classes.postButton}>
                    Post
                </button>
            </div>
        </div>
    );
};
