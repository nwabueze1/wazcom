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
    initiateEmbed,
}) => {
    const classes = useCreatePostInputStyles();
    const insertButtonTop = useMemo(() => {
        const editor = document.getElementById("editor");
        const scrollOffset = ((editor?.offsetHeight as number) / window.innerHeight) * 100;
        return scrollOffset > 70 ? 400 : 98 + (editor?.clientHeight ?? 42);
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
                <EmbedButton initiateEmbed={initiateEmbed} />
            </div>
        </div>
    );
};
