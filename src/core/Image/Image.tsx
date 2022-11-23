import React, { useEffect, useRef, useState } from "react";
import clx from "classnames";
import { useImageStyles } from "./styles";
import { ImageProps } from "./types";

export const ImageComponent: React.FC<ImageProps> = ({
    loadingPlaceholder,
    loadingPlaceholderClassName,
    src,
    className,
    ...props
}) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const classes = useImageStyles();
    const [isVisible, setIsVisible] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({
        width: 1,
        height: 1,
    });

    const checkImageVisbilitiy = () => {
        if (!imageRef.current) return;
        const scrollTop = window.pageYOffset;
        const imageScrollPosition = imageRef.current.offsetTop;
        const pageBottomScrollPosition = window.innerHeight + scrollTop;

        setIsVisible(imageScrollPosition < pageBottomScrollPosition);
    };

    const getImageDimensions = (src?: string) => {
        if (!src) return;

        const img = new Image();
        img.addEventListener("load", function () {
            setImageDimensions({
                width: this.width,
                height: this.height,
            });
        });
        img.src = src;
    };

    const generatePlaceholderSrcUrl = (placeholder?: string) => {
        const baseImageUrl = "https://img.wazobia.tech/";
        const defaultPlaceholderUrl =
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/placeholder-light-gray.webp";

        return `${baseImageUrl}${placeholder ?? defaultPlaceholderUrl}?tr=w-${
            imageDimensions.width / 2
        },h-${imageDimensions.height / 2}`;
    };

    useEffect(() => {
        checkImageVisbilitiy();
        getImageDimensions(src);
        window.addEventListener("scroll", checkImageVisbilitiy);
        return () => window.removeEventListener("scroll", checkImageVisbilitiy);
    }, []);

    return (
        <img
            {...props}
            src={isVisible ? src : generatePlaceholderSrcUrl(loadingPlaceholder)}
            ref={imageRef}
            className={clx(
                {
                    [classes.blur]: !isVisible,
                },
                className,
                !isVisible && loadingPlaceholderClassName,
            )}
        />
    );
};
