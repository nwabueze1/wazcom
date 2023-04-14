import { FC, useState } from "react";
import { WysiwygInput } from "../../io";
import { useEditPostStyles } from "./styles";

export const WysiwygInputView: FC<void> = () => {
  const classes = useEditPostStyles();
  const [embedUrl] = useState<{ value: string; type: string }>({
    value: "https://",
    type: "image",
  });

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
      <WysiwygInput embed={embedUrl} name="postData" onChange={(value) => handleContent(value)} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};
