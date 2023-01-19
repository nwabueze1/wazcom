import React, { useRef, useState } from "react";
import { useInsertButtonStyles } from "./styles";
import { InsertButtonProps } from './types';
import clx from "classnames";


export const InsertButton: React.FC<InsertButtonProps> = ({
    name,
    className,
    label,
    value,
    onChange,
    ...props
}) => {
    const classes = useInsertButtonStyles();

    const [mediaOpen, setMediaOpen] = useState<boolean>(false);
    // const [image, setImage] = useState<ImageProperties>({
    //     url: "",
    //     title: "",
    //     width: { desktop: "100", tablet: "100", mobile: "100" },
    //     height: { desktop: "100", tablet: "100", mobile: "100" },
    // });

    const editorRef = useRef<Editor | any>();

    const handleContentChange = (content: string) => {
        onChange?.({ name: name as string, value: content });
    };

    const handleClick = () => {
       
    }

    // const handleSelectImage = (value: ImageProperties) => {
    //     setMediaOpen(false);
    //     setImage({ ...image, url: value?.url, title: value?.title });
    // };

    // const handleMediaLibraryClose = () => {
    //     setMediaOpen(false);
    // };

    // const handleDialogClose = () => {
    //     setImage({ ...image, url: "" });
    // };

    // const insertImage = () => {
    //     if (image.url)
    //         editorRef.current.insertContent(
    //             `<picture>
    //     <source media="(min-width: 654px)" srcset=${image?.url} width=${image?.width["tablet"]} height=${image?.height["tablet"]} />
    //     <source media="(min-width: 354px)" srcset=${image?.url} width=${image?.width["mobile"]} height=${image?.height["mobile"]} />
    //     <img src=${image?.url} width=${image?.width["desktop"]} height=${image?.height["desktop"]} />
    //     </picture>`,
    //         );
    //     setImage({
    //         url: "",
    //         title: "",
    //         width: { desktop: "100", tablet: "100", mobile: "100" },
    //         height: { desktop: "100", tablet: "100", mobile: "100" },
    //     });
    // };

    // const updateImage = (name: string, value: string, device?: string) => {
    //     if (device && (name == "width" || name == "height"))
    //         setImage({ ...image, [name]: { ...image[name], [device]: value } });
    //     else setImage({ ...image, [name]: value });
    // };

    return (
        <div className={clx(className, classes.root)}>
            <button
            className={classes.insertButton}
            onClick = {handleClick}
            >+</button>
            <div className={classes.selectOption}>
                <span className={classes.optionTitleSpan}>EMBEDS</span>
                <div className={classes.options}>
                    <div className={classes.option}>
                        <div className={classes.optionItemIcon}>
                            icon
                        </div>
                        <div className={classes.optionItemRight}>
                            <div className={classes.optionItemTitle}>Picture</div>
                            <div className={classes.optionItemSpan}>jpeg, png</div>
                        </div>
                    </div>

                    <div className={classes.option}>
                        <div className={classes.optionItemIcon}>
                            icon
                        </div>
                        <div className={classes.optionItemRight}>
                            <div className={classes.optionItemTitle}>Video</div>
                            <div className={classes.optionItemSpan}>Embed a Youtube video</div>
                        </div>
                    </div>

                    <div className={classes.option}>
                        <div className={classes.optionItemIcon}>
                            icon
                        </div>
                        <div className={classes.optionItemRight}>
                            <div className={classes.optionItemTitle}>Social </div>
                            <div className={classes.optionItemSpan}>Embed a Facebook Link</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
