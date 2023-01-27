import React, { useRef, useState, useEffect } from "react";
import { useCreatePostInputStyles } from "./styles";
import { CreatePostInputProps as WysiwygInputProps } from "./types";
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
    onChange,
    error,
    feedback,
    Loader,
    client,
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

    useEffect(() => {
     console.log(editorContent)
    }, [editorContent])
    

    const handleChange = (e: React.MouseEvent<HTMLElement>) => {
        if (onChange) {
            onChange?.({ name: name ?? "", value: {title: postTitle, content: editorContent} });
        }
    };

    return (
        <>
            <div className={clx(className, classes.root)}>
                <div className={classes.header}></div>
                <PosTitleInput 
                handlePostTitle={handlePostTitle} 
                placeHolder={"This is the title"}
                />
                <div
                    className={clx(
                        classNames?.createPostInput,
                        error && classes.editorError,
                    )}
                >
                    <Editor handleContent={handleContent} />
                </div>
            </div>
            <div className={classes.postButtonContainer}>
                <button 
                onClick={()=>handleChange()}
                className={classes.postButton}>
                    Post
                </button>
            </div>
        </>
    );
};
