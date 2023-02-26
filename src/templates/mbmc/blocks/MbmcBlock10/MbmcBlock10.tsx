import { useMbmcBlock10Styles } from "./styles";
import { FC } from "react";
import { MbmcBlock10Props } from "./types";
import clx from "classnames";
import { handleElementClick } from "../../utilities";

export const MbmcBlock10: FC<MbmcBlock10Props> = ({
  mode = "view",
  handleClick,
  activeElement,
  index,
  tags,
}) => {
  const classes = useMbmcBlock10Styles();

  return (
    <div className={classes.root}>
      <div className={classes.tagsContainer}>
        {tags.map((tag, tagIndex) => {
          return (
            <div
              key={tagIndex}
              className={clx(classes.tag, tags.length - 1 !== tagIndex && classes.border)}
            >
              <img
                src={tag.image}
                alt={tag.text}
                className={clx(
                  classes.tagImage,
                  activeElement === `${String(index)}.tags.${String(tagIndex)}.image` &&
                    classes.block10ActiveElement,
                )}
                onClick={() =>
                  handleElementClick(
                    mode,
                    `${String(index)}.tags.${String(tagIndex)}.image`,
                    handleClick,
                  )
                }
              />{" "}
              <p
                className={clx(
                  classes.tagText,
                  activeElement === `${String(index)}.tags.${String(tagIndex)}.text` &&
                    classes.block10ActiveElement,
                )}
                onClick={() =>
                  handleElementClick(
                    mode,
                    `${String(index)}.tags.${String(tagIndex)}.text`,
                    handleClick,
                  )
                }
              >
                {tag.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
