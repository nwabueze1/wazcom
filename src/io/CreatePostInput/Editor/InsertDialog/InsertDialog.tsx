import React, { useRef, useState } from "react";
import { useInsertDialogStyles } from "./styles";
import { InsertDialogProps } from './types';
import clx from "classnames";
import CloseIcon from "./CloseIcon";


export const InsertDialog: React.FC<InsertDialogProps> = ({
    dialogType,
    handleDialogClose
}) => {
    const classes = useInsertDialogStyles();


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
                {dialogType} modal
            </div>
        </div>
    );
};