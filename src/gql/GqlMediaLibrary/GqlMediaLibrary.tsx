import { Loader } from "../../core";
import { TextInput } from "../../io";
import clx from "classnames";
import { DocumentNode } from "graphql";
import {
  useGetInstagramImages,
  useGetLibraryImages,
  useGetPexelsImages,
  useGetUnsplashImages,
  TImageResponse,
} from "../GqlMediaLibrarySelector/hooks/get";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { DeleteMedia, EditMedia, MediaUploader } from "./components";
import { AddMedia } from "./components/AddMedia/AddMedia";
import { Instagram } from "./components/Instagram";
import { Layout } from "./components/Layout/Layout";
import { layoutData } from "./components/Layout/data";
import { medialibraryTabs, selectorTabs } from "./data";
import {
  getUniqueImages,
  mutateMedia,
  useDisplayEmptyMediaLibrary,
  useDisplayImages,
  useFileSelect,
  useMediaUpload,
  useOnScroll,
  useUpdateMediaLibrary,
} from "./hooks";
import { useMediaLibraryStyles } from "./styles";
import { GqlMediaLibraryProps, Image, ImageUpdate } from "./types";
import { useIntegrateInstagramAccount } from "../GqlMediaLibrarySelector/hooks/connect";
import { validateImg } from "../../helpers/imageValidator";
import { notify, getCodeFromUrl } from "../../helpers";
import { GqlImageCropper } from "../GqlImageCropper";

export const GqlMediaLibrary: FC<GqlMediaLibraryProps> = ({
  className,
  config,
  onChange,
  name = "image",
  handleClose,
  isSelector = false,
  showAddMedia,
  header,
  library_uuid,
  imageServiceDomain = "img.wazobia.tech",
  onSelect,
  useCropperOnUpload = false,
  useServiceDomainOnUpload = false,
}) => {
  const { client, upload, update, remove, query, unsplash, instagram, pexels } = config;
  const refs = { fileRef: useRef<any>(), listInnerRef: useRef<any>() };
  const handleFileSelect = useFileSelect();
  const handleOnScroll = useOnScroll();
  const handleDisplayImages = useDisplayImages();
  const handleMediaUpload = useMediaUpload();
  const handleUpdateMediaLibrary = useUpdateMediaLibrary();
  const handleEmptymediaLibrary = useDisplayEmptyMediaLibrary();
  const classes = useMediaLibraryStyles();
  const [paginatorInfo, setPaginatorInfo] = useState<{
    [key: string]: number;
  }>({ currentPage: 1, lastPage: 2, pexelsPage: 0, unsplashPage: 0 });
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    media: false,
    mutate: false,
  });
  const [activeMedia, setActiveMedia] = useState<{
    index?: number;
    type: string;
    media?: Image | File;
  }>({ type: "" });
  const [open, setOpen] = useState(false);
  const [displayedImages, setDisplayedImages] = useState<Image[]>([]);
  const [activeLayout, setActiveLayout] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<{ [key: string]: number }>({
    selectorTab: 0,
    mediaTab: 0,
    sort: 0,
  });
  const [libraryImages, setLibraryImages] = useState();
  const [splash, setUnsplash] = useState();
  const [instagramImages, setInstagramImages] = useState<any[] | undefined | null>();
  const [pexelsImages, setPexelsImages] = useState();
  const [search, setSearch] = useState("");
  const [showMediaModal, setShowMediaModal] = useState({
    active: false,
    type: "cropper",
  });
  const [mediaFilesDetails, setMediaFilesDetails] = useState([
    {
      caption: "",
      name: "",
      description: "",
      alternative_text: "",
      src: "",
      file: undefined as File | undefined,
    },
  ]);
  const getLibraryImages = useGetLibraryImages();
  const getUnsplashImages = useGetUnsplashImages();
  const getPexelsImages = useGetPexelsImages();
  const getInstagramImages = useGetInstagramImages();
  const integrateInstagram = useIntegrateInstagramAccount();
  let imageSignal: string;

  useEffect(() => {
    const instagramCode = getCodeFromUrl();
    if (instagramCode) {
      integrateInstagram(client, instagram.integrate, {
        code: instagramCode as string,
        library_uuid,
      });
    }

    const params = new URLSearchParams(window.location.search);
    const tab = params.get("instagram_integrated");
    if (tab) setActiveTab({ ...activeTab, mediaTab: 2 });
  }, []);

  useEffect(() => {
    setDisplayedImages([]);
    if (showAddMedia) {
      showAddMedia({
        isSelector,
        mediaTab: activeTab.mediaTab,
        fileRef: refs.fileRef,
        handleMediaAction,
        addBtn: classes.addBtn,
      });
    }

    fetchImages();
  }, [activeTab.mediaTab, activeTab.selectorTab]);

  useEffect(() => {
    if (activeMedia.index && activeMedia.index > 0) fetchImages(true);
  }, [activeMedia.index]);

  useEffect(() => {
    if (!search) {
      if (
        activeTab.mediaTab ||
        activeTab.selectorTab === 1 ||
        activeTab.mediaTab === 1 ||
        activeTab.selectorTab
      ) {
        splash && setUnsplash(undefined);
        return;
      }

      if (
        activeTab.mediaTab ||
        activeTab.selectorTab === 3 ||
        activeTab.mediaTab === 3 ||
        activeTab.selectorTab
      ) {
        pexelsImages && setPexelsImages(undefined);
        return;
      }
    }

    const getSearchData = setTimeout(() => {
      fetchImages();
    }, 1000);

    return () => clearTimeout(getSearchData);
  }, [search]);

  const fetchImages = (isPagination = false) => {
    let type: "library" | "unsplash" | "instagram" | "pexels";

    if (activeTab.mediaTab === 0 || activeTab.selectorTab === 0) type = "library";
    if (activeTab.mediaTab === 1 || activeTab.selectorTab === 1) type = "unsplash";
    if (activeTab.mediaTab === 2 || activeTab.selectorTab === 2) type = "instagram";
    if (activeTab.mediaTab === 3 || activeTab.selectorTab === 3) type = "pexels";

    const loadImages = async () => {
      await getImages(type, isPagination);
    };

    loadImages();
  };

  const getImages = async (
    type: "library" | "unsplash" | "instagram" | "pexels",
    isPagination = false,
  ) => {
    let setState: any, images: any;

    switch (type) {
      case "library":
        setState = setLibraryImages;
        images = libraryImages;
        break;
      case "unsplash":
        setState = setUnsplash;
        images = splash;
        break;
      case "pexels":
        setState = setPexelsImages;
        images = pexelsImages;
        break;
      case "instagram":
        setState = setInstagramImages;
        images = instagramImages;
        break;
      default:
        setState = setLibraryImages;
        images = libraryImages;
    }

    if (type === "instagram" && images === null) return;
    else if (images && !isPagination && search == undefined) {
      setDisplayedImages(() => getUniqueImages(images));
      return;
    }

    if (type === "instagram" && isPagination) return;

    setLoading({ ...loading, media: true });

    imageSignal = (Math.random() * 5000).toString(2);
    localStorage.setItem("imageSignal", String(imageSignal));

    const callback = (response: TImageResponse) => {
      const callbackImageSignal = imageSignal;

      if (localStorage.getItem("imageSignal") !== callbackImageSignal) return;

      const { images: fetchedImages, paginatorInfo: fetchedPaginatorInfo } = response;
      const allImages = isPagination ? [...(images ?? []), ...fetchedImages] : [...fetchedImages];
      setState(getUniqueImages([...allImages]));
      setDisplayedImages(getUniqueImages([...allImages]));

      if (type === "library") setPaginatorInfo({ ...paginatorInfo, ...fetchedPaginatorInfo });
      else if (type === "unsplash")
        setPaginatorInfo({
          ...paginatorInfo,
          unsplashPage: isPagination ? paginatorInfo?.unsplashPage + 1 : 1,
        });
      else if (type === "pexels")
        setPaginatorInfo({
          ...paginatorInfo,
          pexelsPage: isPagination ? paginatorInfo?.pexelsPage + 1 : 1,
        });
      setLoading({ ...loading, media: false });
    };

    const onError = () => {
      setLoading({ ...loading, media: false });
    };

    if (type === "library")
      await getLibraryImages(
        client,
        query.name,
        isPagination
          ? { page: (paginatorInfo?.currentPage ?? 0) + 1, count: 10, library_uuid, search }
          : { count: 10, library_uuid, search },
        callback,
        onError,
      );
    if (type === "unsplash")
      await getUnsplashImages(
        client,
        unsplash.name,
        isPagination
          ? { page: (paginatorInfo?.unsplashPage ?? 0) + 1, limit: 10, search }
          : { limit: 10, search },
        callback,
        onError,
      );
    if (type === "pexels")
      await getPexelsImages(
        client,
        pexels.name,
        isPagination
          ? { page: (paginatorInfo?.pexelsPage ?? 0) + 1, limit: 10, search }
          : { limit: 10, search },
        callback,
        onError,
      );
    if (type === "instagram")
      await getInstagramImages(client, instagram.name, library_uuid, callback, () => {
        onError();
        setInstagramImages(null);
      });
  };

  const renderPage = () => {
    if (loading.media && !activeMedia.index) return displayMediaLibraryImages();

    if (activeTab.mediaTab === 2 || activeTab.selectorTab === 2)
      return (
        <Instagram
          connected={Boolean(instagramImages)}
          displayImages={displayMediaLibraryImages}
          onChange={onChange}
          library_uuid={library_uuid}
          client={client}
          mutation={instagram.connect}
        />
      );
    return displayMediaLibraryImages();
  };

  const updateMediaLibrary = useCallback(
    (images: Image | Image[], type = "add", variables?: ImageUpdate) => {
      handleUpdateMediaLibrary(
        Array.isArray(images) ? images : [images],
        displayedImages,
        (images: Image[]) => {
          setDisplayedImages(images);
          setLibraryImages(images as unknown as any);
        },
        (index: number) => {
          setActiveMedia({ ...activeMedia, index });
        },
        type,
        variables,
      );
      handleMediaAction("", undefined);
    },
    [activeMedia, displayedImages],
  );

  const handleFileChange = (event: React.ChangeEvent<any>) => {
    if (!event.target.files || event.target.files === 0) return;
    const file = event.target.files[0];
    if (!validateImg(file, 5000000)) return;
    handleMediaAction("add", file);
    setActiveTab({ selectorTab: 0 });
  };

  const handleMediaAction = (type: string, media?: Image | File | Array<Image | File>) => {
    if (type === "add" || type === "edit") {
      const { listInnerRef } = refs;
      if (listInnerRef.current) listInnerRef.current.scrollTop = 0;
    }
    if (!media) return;

    if (Array.isArray(media)) {
      if (media.length === 1 && !useCropperOnUpload) {
        setActiveMedia({ type, media: media[0] });
      } else {
        handleMediaCropperUploader(media);
      }
    } else {
      if (!useCropperOnUpload) {
        setActiveMedia({ type, media });
      } else {
        handleMediaCropperUploader([media]);
      }
    }
  };

  const handleSearchChange = useCallback(
    (data: { name: string; value: any }) => {
      if (
        activeTab.mediaTab === 1 ||
        activeTab.selectorTab === 1 ||
        activeTab.mediaTab === 3 ||
        activeTab.selectorTab === 3 ||
        activeTab.mediaTab === 0 ||
        activeTab.selectorTab === 0
      ) {
        return setSearch(data.value);
      }
    },
    [displayedImages, activeTab.mediaTab, activeTab.selectorTab],
  );

  const handleMediaAdd = useCallback(
    async (variables: ImageUpdate) => {
      if (!validateImg(activeMedia.media as File, 5000000)) return;
      await handleMediaUpload(
        client,
        upload?.name,
        { ...variables, image: activeMedia.media as File, library_uuid },
        setLoading,
        (image: Image) => {
          updateMediaLibrary(image, "add");
          notify("success", "Image added successfully");
        },
      );
    },
    [activeMedia, loading],
  );

  const handleMediaUpdate = useCallback(
    async (variables: ImageUpdate) => {
      if (!variables.uuid) {
        return handleMediaAdd({ ...variables });
      }
      const media = activeMedia.media as Image;
      setLoading({ ...loading, mutate: true });
      await mutateMedia(
        client,
        update?.name as DocumentNode,
        media,
        () => {
          updateMediaLibrary(media, "update", variables);
          handleMediaAction("", undefined);
          notify("success", "Image updated successfully");
        },
        variables,
      );
      setLoading({ ...loading, mutate: false });
    },
    [activeMedia],
  );

  const handleMediaDelete = useCallback(async () => {
    const media = activeMedia.media as Image;
    setLoading({ ...loading, mutate: true });
    await mutateMedia(client, remove?.name as DocumentNode, media, () => {
      updateMediaLibrary(media, "delete");
      handleMediaAction("", undefined);
      notify("success", "Image deleted successfully");
    });
    setLoading({ ...loading, mutate: false });
  }, [activeMedia, loading]);

  const handleFileSelection = () => {
    handleFileSelect(refs.fileRef);
    setOpen(false);
  };

  const displayLayoutData = () =>
    layoutData.map((count, index) => (
      <Layout
        count={count}
        key={index}
        onclick={() => setActiveLayout(index)}
        className={clx(activeLayout === index ? classes.activeLayout : "")}
        active={Boolean(activeLayout === index)}
      />
    ));

  const displaySelectorTabs = () =>
    selectorTabs.map((tab, index) => (
      <p
        key={index}
        className={clx(classes.selectorTab, activeTab.selectorTab !== index && classes.inActive)}
        onClick={() => {
          setSearch("");
          setActiveMedia({ ...activeMedia, index: undefined });
          setActiveTab({ ...activeTab, selectorTab: index });
        }}
      >
        {tab}
      </p>
    ));

  const displayMediaTabs = () =>
    medialibraryTabs.map((tab, index) => {
      const isActive = activeTab.mediaTab === index;
      return (
        <div
          className={clx(classes.mediaTab, isActive && "active")}
          key={index}
          onClick={() => {
            setSearch("");
            setActiveMedia({ ...activeMedia, index: undefined });
            setActiveTab({ ...activeTab, mediaTab: index });
          }}
        >
          {tab.icon && (
            <p className={clx(classes.mediaTabIcon, isActive && "active")}>{tab.icon}</p>
          )}
          <p className={clx(classes.tabName, isActive && "active")}>{tab.name}</p>
        </div>
      );
    });

  const displayMediaLibraryImages = () => (
    <div
      className={clx(classes.wrapper)}
      ref={refs.listInnerRef}
      onScroll={() => {
        handleOnScroll(refs.listInnerRef, (index: number) => {
          setActiveMedia({ ...activeMedia, index });
        });
      }}
    >
      <>
        <input
          name="image_url"
          accept="image/*"
          hidden
          type="file"
          ref={refs.fileRef}
          onChange={handleFileChange}
        />
        {isSelector && (
          <div className={classes.selectorSearchBox}>
            {[0, 1, 3].includes(activeTab.selectorTab) && (
              <TextInput
                name="search"
                type="text"
                placeholder="Search images here"
                value={search}
                onChange={handleSearchChange}
                className={classes.selectorSearch}
              />
            )}
            {activeTab.selectorTab === 0 && (
              <AddMedia
                handleFilesSelection={handleFileSelection}
                handleOpenMedia={open}
                handleCloseMedia={setOpen}
                handleMediaAction={handleMediaAction}
                buttonText="Upload"
              />
            )}
          </div>
        )}
        <div className={clx(activeTab.selectorTab === 0 && classes.dialogueView)}>
          <div
            className={clx(
              classes.collection,
              activeTab.selectorTab === 0 && classes.uploadViewWidth,
            )}
          >
            {loading.media && !activeMedia.index ? (
              <Loader />
            ) : (
              <>
                {(activeMedia.type === "add" || activeMedia.type === "edit") && (
                  <EditMedia
                    loading={loading.mutate}
                    handleEdit={(variables: ImageUpdate) => {
                      handleMediaUpdate(variables);
                    }}
                    handleClose={() => {
                      handleMediaAction("", undefined);
                    }}
                    image={activeMedia.media as Image | File}
                  />
                )}
                {displayedImages.length > 0
                  ? handleDisplayImages(
                      displayedImages,
                      (image: Image) => {
                        onSelect?.({
                          name: name ?? "",
                          value: image,
                        });
                      },
                      handleMediaAction,
                      isSelector ? false : activeTab.mediaTab === 0,
                      activeLayout,
                    )
                  : handleEmptymediaLibrary(
                      handleFileSelection,
                      open,
                      setOpen,
                      handleMediaAction,
                      activeTab.mediaTab > 0 || activeTab.selectorTab > 0
                        ? "Search Results"
                        : undefined,
                      activeTab.mediaTab > 0 || activeTab.selectorTab > 0
                        ? search
                          ? "There are no results for " + `"${search}"`
                          : "There are no search results"
                        : undefined,
                    )}
              </>
            )}

            {activeTab.selectorTab === 1 && loading.media && !activeMedia.index && (
              <>
                {(activeMedia.type === "add" || activeMedia.type === "edit") && (
                  <EditMedia
                    loading={loading.mutate}
                    handleEdit={(variables: ImageUpdate) => {
                      handleMediaUpdate(variables);
                    }}
                    handleClose={() => {
                      handleMediaAction("", undefined);
                    }}
                    image={activeMedia.media as Image | File}
                  />
                )}
                {displayedImages.length > 0 &&
                  handleDisplayImages(
                    displayedImages,
                    (image: Image) => {
                      onChange?.({
                        name: name ?? "",
                        value: image,
                      });
                    },
                    handleMediaAction,
                    isSelector,
                    activeLayout,
                  )}
              </>
            )}
          </div>
          {displayedImages.length > 0 && loading.media && activeMedia.index && (
            <div className={classes.loaderParent}>
              <Loader className={classes.loader} />
            </div>
          )}
        </div>
        <DeleteMedia
          display={activeMedia.type === "delete"}
          loading={loading.mutate}
          media={activeMedia.media as Image}
          handleClose={() => {
            handleMediaAction("", undefined);
          }}
          handleDelete={handleMediaDelete}
        />
      </>
    </div>
  );

  const displayMediaLibrary = () => (
    <div className={clx(classes.container, className)}>
      <div className={clx(classes.actions, isSelector && classes.viewOnlyActions)}>
        {isSelector ? (
          <>
            <div className={classes.tabs}>{displaySelectorTabs()}</div>
            <div className={classes.iconContainer}>
              <FaTimes
                className={classes.timesIcon}
                onClick={() => {
                  handleClose?.();
                }}
              />
            </div>
          </>
        ) : (
          <div className={clx(classes.actionsContainer)}>
            {!isSelector && (
              <div
                className={clx(classes.selectorContainer, activeTab.mediaTab == 2 && "instagram")}
              >
                {activeTab.mediaTab !== 2 && activeTab.mediaTab !== 0 && (
                  <div className={classes.searchContainer}>
                    <TextInput
                      name="search"
                      type="text"
                      placeholder="Search images here"
                      value={search}
                      onChange={handleSearchChange}
                      className={classes.search}
                      classNames={{ textInput: classes.textInput }}
                    />
                  </div>
                )}
                <div className={clx(classes.layouts, activeTab.mediaTab === 2 && "instagram")}>
                  {displayLayoutData()}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {renderPage()}
    </div>
  );

  const handleMediaCropperUploader = (mediaFiles: Array<Image | File>) => {
    const filesArray = Array.from(mediaFiles);

    const fileReaders = filesArray.map((file) => {
      return new Promise<{ file: File; src: string }>((resolve, reject) => {
        if (!(file instanceof File)) return;

        const reader = new FileReader();
        reader.onload = () => {
          resolve({ file, src: reader.result as string });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders)
      .then((fileDetails) => {
        const newImageFilesDetails = fileDetails.map(({ file, src }) => ({
          src,
          name: file.name,
          description: file.name,
          alternative_text: file.name,
          caption: "",
          file,
        }));

        setMediaFilesDetails(newImageFilesDetails);
        setShowMediaModal({
          active: true,
          type: mediaFiles.length === 1 ? "cropper" : "uploader",
        });
      })
      .catch((error) => {
        console.error("Error reading files: ", error);
      });
  };

  const renderMediaCropperUploader = () => {
    if (
      mediaFilesDetails.length === 1 &&
      showMediaModal.active &&
      showMediaModal.type === "cropper"
    ) {
      return (
        <GqlImageCropper
          name={name}
          config={config}
          open={true}
          value={{
            src: mediaFilesDetails?.[0]?.src,
            name: mediaFilesDetails?.[0]?.name,
            description: mediaFilesDetails?.[0]?.caption,
            alternative_text: mediaFilesDetails?.[0]?.alternative_text,
            caption: mediaFilesDetails?.[0]?.caption,
          }}
          fileMedia={mediaFilesDetails[0].file}
          handleClose={(args) => {
            handleClose?.(args);
            setShowMediaModal({
              active: false,
              type: "cropper",
            });
          }}
          onChange={(data) => {
            onChange?.(data);
            updateMediaLibrary({ ...data.value, url: data.value.src }, "add");
          }}
          imageServiceDomain={imageServiceDomain}
          useServiceDomainOnUpload={useServiceDomainOnUpload}
        />
      );
    }
    if (showMediaModal.active && showMediaModal.type === "uploader") {
      return (
        <MediaUploader
          name={name}
          config={config}
          open={true}
          handleClose={(args) => {
            handleClose?.(args);
            setShowMediaModal({
              active: false,
              type: "uploader",
            });
          }}
          onChange={(data) => {
            updateMediaLibrary(data.value, "add");
          }}
          mediaFiles={mediaFilesDetails}
        />
      );
    }
    return null;
  };

  return (
    <div className={classes.base}>
      {header && (
        <header className={classes.header}>
          {header}
          {!isSelector && <div className={clx(classes.mediaTabs)}>{displayMediaTabs()}</div>}
        </header>
      )}
      {displayMediaLibrary()}
      {renderMediaCropperUploader()}
    </div>
  );
};
