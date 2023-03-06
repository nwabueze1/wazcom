import React, { useMemo } from "react";
import { useCreatePostInputStyles } from "./styles";
import { WysiwygInputProps } from "./types";
import { Editor } from "./Editor";
import { EmbedButton } from "./EmbedButton";
import clx from "classnames";

export const WysiwygInput: React.FC<WysiwygInputProps> = ({
    className,
    onChange,
    value,
    embed,
}) => {
    const classes = useCreatePostInputStyles();
    const insertButtonTop = useMemo(() => {
        const editor = document.getElementById("editor");
        return 98 + (editor?.clientHeight ?? 42);
    }, [value?.content]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.({ name: "title", value: event.target.value });
    };

    const handleContentChange = (content: string) => {
        onChange?.({ name: "content", value: content });
    };

    return (
        <div className={clx(className, classes.root)}>
            <div className={classes.postTitleInputParent}>
                <input
                    placeholder={"Add post title"}
                    className={classes.postTitleInput}
                    value={value?.title ?? ""}
                    onChange={handleTitleChange}
                />
            </div>
            <Editor
                content={value?.content ?? ""}
                handleChange={handleContentChange}
                embed={embed}
            />
            <div style={{ position: "absolute", top: insertButtonTop }}>
                <EmbedButton />
            </div>
        </div>
    );
};
