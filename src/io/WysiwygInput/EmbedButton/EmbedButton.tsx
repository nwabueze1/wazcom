import React, { useState } from "react";
import { useInsertButtonStyles } from "./styles";
import { EmbedButtonProps } from "./types";
import clx from "classnames";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import { EmbedOption } from "../EmbedOption";
import { AiOutlineLink } from "react-icons/ai";
import { ClickAwayListener } from "@mui/base";

export const EmbedButton: React.FC<EmbedButtonProps> = ({ initiateEmbed }) => {
  const classes = useInsertButtonStyles();

  const [open, setOpen] = useState<boolean>(false);

  const handleInsertOptions = () => {
    setOpen(!open);
  };

  const handleClick = (type: string) => {
    initiateEmbed?.(type);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpen(false);
      }}
    >
      <div className={classes.root}>
        <button className={classes.insertButton} onClick={handleInsertOptions}>
          +
        </button>
        <div
          className={clx(classes.selectOption, open ? classes.showOptions : classes.hideOptions)}
        >
          <span className={classes.optionTitleSpan}>EMBEDS</span>
          <div className={classes.options}>
            <EmbedOption
              icon={<PictureIcon />}
              title={"Picture"}
              description={"jpeg, png"}
              handleClick={() => handleClick("image")}
            />
            <EmbedOption
              icon={<VideoIcon />}
              title={"Video"}
              description={"Embed a Youtube video"}
              handleClick={() => handleClick("video")}
            />
            <EmbedOption
              icon={<AiOutlineLink className={classes.linkIcon} />}
              title={"Link"}
              description={"Embed a Link"}
              handleClick={() => handleClick("link")}
            />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
