import { useLazyQuery } from "@apollo/client";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../Button";
import { last } from "lodash";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Loader } from "../Loader/Loader";
import { GET_S3_IMAGES } from "./graphQL";
import { useMediaLibraryStyles } from "./styles";
import { MediaLibraryProps } from "./types";
import { Uploader } from "./Uploader";

type Image = {
    path: string;
    name: string;
};

const split = (array: any[], count: number) => {
    const collection: any[][] = [];

    array.map((item, index) => {
        const row = collection[index % count] ?? [];
        collection[index % count] = [...row, item];
    });

    return collection;
};

export const MediaLibrary: FC<MediaLibraryProps> = ({ className }) => {
    const fileRef = useRef<any>();
    const classes = useMediaLibraryStyles();
    const [images, setImages] = useState<Image[]>();
    const [getS3Images, { data, loading }] = useLazyQuery(GET_S3_IMAGES, {
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        getS3Images({ variables: { count: 9 } });
    }, []);

    useEffect(() => {
        if (data?.getS3Images) {
            if (!images) {
                setImages(data?.getS3Images);
            } else {
                setImages([...images, ...data?.getS3Images]);
            }
        }
    }, [data]);

    const listInnerRef = useRef<any>();

    const onScroll = useCallback(() => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight && !loading) {
                getS3Images({
                    variables: { count: 12, startAfter: last(images)?.path },
                });
            }
        }
    }, [images, loading]);

    const handleFileSelect = useCallback(() => {
        const fileInput = fileRef.current;
        if (fileInput) {
            fileInput.click();
        }
    }, []);

    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.library}>
                <Uploader ref={fileRef} />
                <div className={classes.actions}>
                    <Button
                        color="primary"
                        startIcon={<IoCloudUploadOutline />}
                        onClick={handleFileSelect}
                    >
                        Upload Image
                    </Button>
                </div>
                <div className={classes.collection} onScroll={() => onScroll()} ref={listInnerRef}>
                    {images &&
                        split(images, 3).map((_, columnIndex) => {
                            return (
                                <div key={columnIndex} className={classes.column}>
                                    {_.map(({ path }, index) => {
                                        return (
                                            <Grow in={true} key={index}>
                                                <div className={classes.thumbnail}>
                                                    <img src={path} className={classes.image} />
                                                </div>
                                            </Grow>
                                        );
                                    })}
                                </div>
                            );
                        })}
                </div>
                {images && loading && <Loader className={classes.loader} />}
            </div>
        </div>
    );
};
