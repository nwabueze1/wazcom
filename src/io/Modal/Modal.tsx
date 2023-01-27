import React, { useRef, useState } from "react";
import { useModalStyles } from "./styles";
import { ModalProps } from './types';
import clx from "classnames";
import CloseIcon from "./CloseIcon";


export const Modal: React.FC<ModalProps> = ({
    dialogType,
    embedUrl,
    setEmbedUrl,
    handleDialogClose
}) => {
    const classes = useModalStyles();
    const [embedType, setEmbedType] = useState('')
    const [embedUrlText, setEmbedUrlText] = useState('')

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setEmbedType(value)
    }

    const handleEmbed = (e: React.MouseEvent<HTMLElement>) => {
    }
    return (
        <div className={classes.root}>
            
            <div className={clx(classes.modalContent)}>
                <div className={classes.modalHeader}>
                    <span className={classes.modalHeaderText}>Embed</span>
                    <span 
                    className={classes.closeModal}
                    onClick={()=>handleDialogClose()}
                    >
                        <CloseIcon />
                    </span>
                </div>
                
                <div>
                    <div className={classes.sourceProvider}>
                        <span className={classes.sourceTitle}>VIDEO PROVIDER</span>
                        <select className={classes.sourceContent} onChange={handleSelectChange}>
                            <option>Select</option>
                            {dialogType == 'video' ? 
                            (<option value="youtube">Youtube</option>) : 
                            (<option value="social">Facebook</option>)}
                        </select>

                        <span className={classes.sourceTitle}>URL</span>
                        <input type="text"
                        value={embedUrlText}
                        onChange={(e) => setEmbedUrlText(e.target.value)}
                        className={classes.sourceInput}
                        placeholder="https://youtube.com/channel_video"
                        />
                    </div>
                    <div className={classes.modalButtons}>
                        <button className={classes.embedButton}
                        onClick={()=>handleEmbed()}
                        >
                            Embed
                        </button>
                        <button className={classes.cancelButton} onClick={()=>handleDialogClose()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};