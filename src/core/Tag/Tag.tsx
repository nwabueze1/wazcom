import { FC, useState } from "react";
import { TagProps } from "./types";
import { useTagStyles } from "./styles";
import clx from "classnames";
import { capitalize } from "./helpers";
import { FaTimes } from "react-icons/fa";

export const Tag: FC<TagProps> = ({ name, status, isDismissable = false, classname }) => {
  const classes = useTagStyles();
  const [showTag, setShowTag] = useState(true);

  const removeTag = () => {
    if (!isDismissable) return;
    setShowTag(false);
  };

  return (
    <>
      {showTag && (
        <div
          className={clx(
            classes.root,
            classname,
            status ? classes.tagActive : classes.tagInactive,
            isDismissable && classes.taggable,
          )}
        >
          <p>{capitalize(name ?? "")}</p>
          {isDismissable && (
            <p className={classes.tagIconParent} onClick={removeTag}>
              <FaTimes />
            </p>
          )}
        </div>
      )}
    </>
  );
};
