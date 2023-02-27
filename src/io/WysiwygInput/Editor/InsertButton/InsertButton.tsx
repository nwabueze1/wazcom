import React, { useState } from "react";
import { useInsertButtonStyles } from "./styles";
import { InsertButtonProps, OptionItemProps } from './types';
import clx from "classnames";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import SocialIcon from "./SocialIcon";


export const InsertButton: React.FC<InsertButtonProps> = ({
    className,
    handleImageModalState,
}) => {
    const classes = useInsertButtonStyles();

    const [mediaOpen, setMediaOpen] = useState<boolean>(false);

    const handleInsertOptions = () => {
        setMediaOpen(!mediaOpen)
     }

    const handleOptionClick = (e:any, option:string) => {
        if (option && e) {
            handleImageModalState(option)
        }
    }
    
    return (
        <div className={clx(className, classes.root)}>
            <button
            className={classes.insertButton}
            onClick = {handleInsertOptions}
            >+</button>
            <div className={clx(classes.selectOption, mediaOpen? classes.showOptions: classes.hideOptions)}>
                <span className={classes.optionTitleSpan}>EMBEDS</span>
                <div className={classes.options}>
                    <OptionItem 
                    icon={<PictureIcon />} 
                    title={"Picture"} 
                    itemInfo={"jpeg, png"} 
                    handleOptionClick={()=>handleOptionClick(event, "picture")} />
                    <OptionItem 
                    icon={<VideoIcon />} 
                    title={"Video"} 
                    itemInfo={"Embed a Youtube video"} 
                    handleOptionClick={()=>handleOptionClick(event, "video")} />
                    <OptionItem 
                    icon={<SocialIcon />} 
                    title={"Social"} 
                    itemInfo={"Embed a Facebook Link"} 
                    handleOptionClick={()=>handleOptionClick(event, "social")} />
                </div>
            </div>
        </div>
    );
};

export const OptionItem: React.FC<OptionItemProps> = ({icon, title, itemInfo, handleOptionClick}) => {
    const classes = useInsertButtonStyles();
    return (
        <div className={classes.option} onClick={()=>handleOptionClick()}>
            <div className={classes.optionItemIcon}>
                {icon}
            </div>
            <div className={classes.optionItemRight}>
                <div className={classes.optionItemTitle}>{title}</div>
                <div className={classes.optionItemSpan}>{itemInfo}</div>
            </div>
        </div>
    );
}