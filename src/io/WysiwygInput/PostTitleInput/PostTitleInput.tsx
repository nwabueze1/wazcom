import clx from "classnames";
import { FC, useEffect, useState } from "react";
import { PostTitleInputProps } from "./types";
import { usePostTitleStyles } from "./styles";

export const PostTitleInput: FC<PostTitleInputProps> = ({
  handlePostTitle,
  className,
  label,
  helperText,
  hideLabel = false,
  info,
  name,
  onChange,
  required,
  type = "text",
  placeholder,
  ...props
}) => {
  const classes = usePostTitleStyles();

  const [title, setTitle] = useState("");

  useEffect(() => {
    handlePostTitle(title);
  }, [title]);

  return (
    <div className={clx(classes.root)}>
      <input
        type={type}
        placeholder={placeholder}
        className={clx(classes.input)}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        {...props}
      />
    </div>
  );
};
