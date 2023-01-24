import React, { useRef, useState } from "react";
import { useInsertButtonStyles } from "./styles";
import { InsertButtonProps, OptionItemProps, ImageProperties } from './types';
import clx from "classnames";
import { InsertDialog } from "../InsertDialog/InsertDialog";
import { EditorMediaLibrary } from "../EditorMediaLibrary/EditorMediaLibrary";
import VideoIcon from "./VideoIcon";
import PictureIcon from "./PictureIcon";
import SocialIcon from "./SocialIcon";


export const InsertButton: React.FC<InsertButtonProps> = ({
    name,
    className,
    label,
    value,
    onChange,
    embedUrl,
    setEmbedUrl,
    ...props
}) => {
    const classes = useInsertButtonStyles();

    const [mediaOpen, setMediaOpen] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [openMediaLibrary, setOpenMediaLibrary] = useState(false)
    const [image, setImage] = useState<ImageProperties>({
        url: "",
        title: "",
        width: { desktop: "100", tablet: "100", mobile: "100" },
        height: { desktop: "100", tablet: "100", mobile: "100" },
    });

    // const editorRef = useRef<Editor | any>();

    // const handleContentChange = (content: string) => {
    //     onChange?.({ name: name as string, value: content });
    // };

    // const handleMediaLibraryClose = () => {
    //     setMediaOpen(false);
    // };

    

    const insertImage = () => {
        if (image.url)
            // editorRef.current.insertContent(
        //         `<picture>
        // <source media="(min-width: 654px)" srcset=${image?.url} width=${image?.width["tablet"]} height=${image?.height["tablet"]} />
        // <source media="(min-width: 354px)" srcset=${image?.url} width=${image?.width["mobile"]} height=${image?.height["mobile"]} />
        // <img src=${image?.url} width=${image?.width["desktop"]} height=${image?.height["desktop"]} />
        // </picture>`,
        //     );
        setImage({
            url: "",
            title: "",
            width: { desktop: "100", tablet: "100", mobile: "100" },
            height: { desktop: "100", tablet: "100", mobile: "100" },
        });
    };

    // const updateImage = (name: string, value: string, device?: string) => {
    //     if (device && (name == "width" || name == "height"))
    //         setImage({ ...image, [name]: { ...image[name], [device]: value } });
    //     else setImage({ ...image, [name]: value });
    // };

    const handleInsertOptions = () => {
        setMediaOpen(!mediaOpen)
     }

     const handleMediaLibraryDialogClose = () => {
        setOpenDialog(false)
        setOpenMediaLibrary(!openMediaLibrary)
    };

    const handleSelectImage = (value: ImageProperties) => {
        console.log(value)
        setMediaOpen(false);
        setImage({ ...image, url: value?.url, title: value?.title });
    };

    const handleOptionClick = (event: React.MouseEvent<HTMLElement>, option: string) => {
        if (option) {
            
            setSelectedOption(option)
            if(option === 'picture') {
                setOpenMediaLibrary(!openMediaLibrary)
                setOpenDialog(false)
            }else{
                setOpenDialog(true)
            }
        }
    }

    const handleDialogClose = (event: React.MouseEvent<HTMLElement>) => {
        setOpenDialog(!openDialog)
    }
    
    return (
        <div className={clx(className, classes.root)}>
            <button
            className={classes.insertButton}
            onClick = {handleInsertOptions}
            >+</button>
                { openDialog && 
                <InsertDialog 
                dialogType={selectedOption} 
                handleDialogClose={handleDialogClose}
                 /> }
                { openMediaLibrary && 
                <EditorMediaLibrary 
                mediaOpen={openMediaLibrary}
                handleSelect={handleSelectImage}
                handleClose={handleMediaLibraryDialogClose}
                 />}
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
        <div className={classes.option} onClick={handleOptionClick}>
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