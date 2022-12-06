import React, { useEffect, useRef, useState } from "react";
import clx from "classnames";
import { useImageStyles } from "./styles";
import { ImageProps } from "./types";

export const LazyImage: React.FC<ImageProps> = ({
    mode = "view",
    blurDataurl,
    placeholder = "empty",
    src,
    className,
    classNames,
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
        const imageScrollPosition = imageRef.current.getBoundingClientRect().top - 150;
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

    const generatePlaceholderSrcUrl = (placeholder?: string, src?: string) => {
        const baseImageUrl = "https://img.wazobia.tech/";

        return `${baseImageUrl}${placeholder ?? src}?tr=w-${imageDimensions.width / 2},h-${
            imageDimensions.height / 2
        }`;
    };

    useEffect(() => {
        checkImageVisbilitiy();
        getImageDimensions(src);
        window.addEventListener("scroll", checkImageVisbilitiy);
        return () => window.removeEventListener("scroll", checkImageVisbilitiy);
    }, []);

    return placeholder === "blur" ? (
        <img
            {...props}
            src={isVisible ? src : generatePlaceholderSrcUrl(blurDataurl, src)}
            ref={imageRef}
            className={clx(
                {
                    [classes.blur]: !isVisible,
                },
                className,
                !isVisible && classNames?.loadingPlaceholder,
            )}
        />
    ) : (
        <img
            {...props}
            src={mode === "edit" || isVisible ? src : undefined}
            ref={imageRef}
            className={className}
        />
    );
};
