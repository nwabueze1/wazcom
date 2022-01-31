import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../../core/Button";
import { last } from "lodash";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Loader } from "../../core/Loader/Loader";
import { useMediaLibraryStyles } from "./styles";
import { ImageDataType, GqlMediaLibraryProps } from "./types";
import { Uploader } from "./Uploader";

const split = (array: any[], count: number) => {
  const collection: any[][] = [];

  array.map((item, index) => {
    const row = collection[index % count] ?? [];
    collection[index % count] = [...row, item];
  });

  return collection;
};

export const GqlMediaLibrary: FC<GqlMediaLibraryProps> = ({
  className,
  config: {
    client,
    query: { name: query, variables: queryVariables },
    upload,
  },
  handleSelectImage,
}) => {
  const fileRef = useRef<any>();
  const listInnerRef = useRef<any>();
  const classes = useMediaLibraryStyles();
  const [images, setImages] = useState<ImageDataType[]>([]);
  const [paginatorInfo, setPaginatorInfo] = useState<{
    [key: string]: number;
  }>({ currentPage: 1, lastPage: 1 });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((res) => {
        setLoading(false);
        if (!images) {
          setImages(res.data?.images.data);
        } else {
          setImages([...images, ...res.data?.images.data]);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const fetchData = async (variables?: any) => {
    return await client.query({
      query,
      fetchPolicy: "network-only",
      variables,
    });
  };

  const onSelect = (data: ImageDataType) => {
    handleSelectImage(data.url);
  };

  const selectImage = (data: ImageDataType) => {
    onSelect ? onSelect(data) : null;
  };

  // const onScroll = useCallback(() => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight && !loading) {
  //       fetchData({ page: 2, first: 10 });
  //     }
  //   }
  // }, [images, loading]);

  const updateMediaLibrary = (image: ImageDataType) => {
    setImages((images) => [image, ...images]);
  };

  const handleFileSelect = useCallback(() => {
    const fileInput = fileRef.current;
    if (fileInput) {
      fileInput.click();
    }
  }, []);

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.library}>
        <Uploader
          ref={fileRef}
          config={{ client, ...upload }}
          setLoading={setLoading}
          updateMediaLibrary={updateMediaLibrary}
        />
        <div className={classes.actions}>
          <Button
            color="primary"
            startIcon={<IoCloudUploadOutline />}
            onClick={handleFileSelect}
          >
            Upload Image
          </Button>
        </div>
        <div className={classes.collection}>
          {images.length === 0 || loading ? (
            <Loader />
          ) : (
            <>
              {images &&
                split(images, 3).map((_, columnIndex) => {
                  return (
                    <div key={columnIndex} className={classes.column}>
                      {_.map((theImage, index) => {
                        return (
                          <Grow in={true} key={index}>
                            <div className={classes.thumbnail}>
                              <img
                                onClick={() => selectImage(theImage)}
                                src={theImage?.url}
                                className={classes.image}
                              />
                            </div>
                          </Grow>
                        );
                      })}
                    </div>
                  );
                })}
            </>
          )}
        </div>
        {images.length > 0 && false && (
          <div className={classes.loaderParent}>
            <Loader className={classes.loader} />
          </div>
        )}
      </div>
    </div>
  );
};
