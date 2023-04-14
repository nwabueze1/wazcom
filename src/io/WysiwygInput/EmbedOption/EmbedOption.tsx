import { FC } from "react";
import { useEmbedOptionStyles } from "./styles";
import { EmbedOptionProps } from "./types";

export const EmbedOption: FC<EmbedOptionProps> = ({ icon, title, description, handleClick }) => {
  const classes = useEmbedOptionStyles();
  return (
    <div className={classes.option} onClick={() => handleClick()}>
      <div className={classes.optionItemIcon}>{icon}</div>
      <div className={classes.optionItemRight}>
        <div className={classes.optionItemTitle}>{title}</div>
        <div className={classes.optionItemSpan}>{description}</div>
      </div>
    </div>
  );
};
