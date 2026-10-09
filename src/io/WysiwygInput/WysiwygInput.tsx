import React from "react";
import { useCreatePostInputStyles } from "./styles";
import { WysiwygInputProps } from "./types";
import { Editor } from "./Editor";
import { EditorToolbar } from "./EditorToolbar";
import clx from "classnames";

export const WysiwygInput: React.FC<WysiwygInputProps> = ({
  className,
  onChange,
  value,
  embed,
  initiateEmbed,
  hasTitle = true,
}) => {
  const classes = useCreatePostInputStyles();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({ name: "title", value: event.target.value });
  };

  const handleContentChange = (content: string) => {
    onChange?.({ name: "content", value: content });
  };

  return (
    <div className={clx(className, classes.root)}>
      <div className={classes.postTitleInputParent}>
        <EditorToolbar initiateEmbed={initiateEmbed} />
        {hasTitle && (
          <input
            placeholder={"Add post title"}
            className={classes.postTitleInput}
            value={value?.title ?? ""}
            onChange={handleTitleChange}
          />
        )}
        <Editor content={value?.content ?? ""} handleChange={handleContentChange} embed={embed} />
      </div>
    </div>
  );
};
