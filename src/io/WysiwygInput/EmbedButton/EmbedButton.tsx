import React, { useState } from "react";
import { useInsertButtonStyles } from "./styles";
import { EmbedButtonProps } from "./types";
import clx from "classnames";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import { EmbedOption } from "../EmbedOption";
import { TbSocial } from "react-icons/tb";
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
              description={"JW player, Youtube, Vimeo"}
              handleClick={() => handleClick("video")}
            />
            <EmbedOption
              icon={<TbSocial className={classes.linkIcon} />}
              title={"Social"}
              description={"Instagram, Twitter, Tiktok, Snapchat, Facebook"}
              handleClick={() => handleClick("link")}
            />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};
