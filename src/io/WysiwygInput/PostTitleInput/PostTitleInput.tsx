import clx from 'classnames';
import React, { FC, useEffect, useState } from "react";
import { PostTitleInputProps } from './types';
import { usePostTitleStyles } from './styles';

export const PosTitleInput: FC<PostTitleInputProps> = ({
    handlePostTitle,
    className,
    label,
    errors,
    helperText,
    hideLabel = false,
    info,
    name,
    onChange,
    required,
    showCC,
    type = "text",
    ...props
}) => {
    const classes = usePostTitleStyles();

    const [title, setTitle] = useState('')
    
    useEffect(() => {
        handlePostTitle(title)
    }, [title])

    return (
        <div className={clx(classes.root)}>
            <input type={type} 
            className={clx(classes.input, errors && classes.error)} 
            value={title}
            onChange={(e)=>setTitle(e.target.value)} {...props} />
        </div>
    )
};