import { FC } from "react";
import { GqlMediaLibraryProps } from "../GqlMediaLibrary/types";
import { GqlMediaLibrarySelectorProps } from "./types";
export declare const GqlMediaLibrarySelector: FC<GqlMediaLibrarySelectorProps & Partial<Pick<GqlMediaLibraryProps, "maxUploadImageSizeInMegabytes" | "checkUrlFormatOnUpload">>>;
