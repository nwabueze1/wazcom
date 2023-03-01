import { FC, useEffect, useState } from "react";
import { WysiwygInput } from "../../io";
import { useEditPostStyles } from "./styles";

export const WysiwygInputView: FC<void> = () => {
  const classes = useEditPostStyles();
  const [embedUrl, setEmbedUrl] = useState<{ url: string; type: string }>({
    url: "https://",
    type: "image",
  });
  const [option, setOption] = useState("");
  const [postDataContent, setPostDataContent] = useState("");

  const handleImageModalState = (option?: string) => {
    alert("modal open");
  };

  let val: any;

  const handleContent = (value: any) => {
    console.log(value);
    val = value;
  };

  const handleClick = () => {
    console.log(val);
  };

  return (
    <div className={classes.root}>
      <WysiwygInput
        embedUrl={embedUrl}
        name="postData"
        onChange={(value) => handleContent(value)}
        handleImageModalState={handleImageModalState}
      />
      <button onClick={handleClick}>click</button>
    </div>
  );
};
