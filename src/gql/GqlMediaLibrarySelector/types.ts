import { GqlMediaSelectorConfigProps } from "../GqlMediaLibrary/types";
import { CommonProps } from "../../types";

export type GqlMediaLibrarySelectorProps = CommonProps &
  GqlMediaSelectorConfigProps & {
    label?: string;
    displayLibrary?: boolean;
    verbose?: boolean;
    variant?: "circle" | "square";
    size?: "sm" | "md" | "lg" | "xl" | "full";
    width?: string;
    height?: string;
    value?: MediaValue;
    isError?: boolean;
    iconType?: "icon" | "button";
    buttonText?: string;
    showIcons?: boolean;
    showActionsButton?: boolean;
    library_uuid: string;
  };

export type TOrientation = "portrait" | "landscape";

export type TScreen = "desktop" | "tablet" | "mobile";

export type TCoordinates = Record<TScreen, any>;

export type MediaValue = {
  name?: string;
  description?: string;
  alternative_text?: string;
  caption?: string;
  src: string;
  orientation?: TOrientation;
  coordinates?: TCoordinates;
};

export enum SocialPlatform {
  Google = "Google",
  Instagram = "Instagram",
  Telegram = "Telegram",
}

export interface integrateInstagramAccount_integrateInstagramAccount {
  __typename: "Social";
  config: any | null;
  platform: SocialPlatform;
}

export interface integrateInstagramAccount {
  integrateInstagramAccount: integrateInstagramAccount_integrateInstagramAccount | null;
}

export interface integrateInstagramAccountVariables {
  code: string;
  library_uuid: string;
}

export interface connectInstagramAccount_connectInstagramAccount {
  __typename: "InstagramOuthResponse";
  redirect_url: string;
}

export interface connectInstagramAccount {
  connectInstagramAccount: connectInstagramAccount_connectInstagramAccount | null;
}

export interface connectInstagramAccountVariables {
  library_uuid: string;
}

export interface GqlGetInstagramImagesVariables {
  library_uuid: string;
}
