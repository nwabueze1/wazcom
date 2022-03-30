/// <reference types="react" />
export declare const useMediaLibraryStyles: (props?: any) => import("@mui/styles").ClassNameMap<"root" | "content" | "column" | "dot" | "tab" | "error" | "search" | "image" | "loading" | "loader" | "actions" | "@keyframes a" | "collection" | "timesIcon" | "thumbnail" | "thumbnailFixedHeight" | "thumbnailOverlay" | "thumbnailActions" | "thumbnailAction" | "thumbnailActionIcon" | "loaderParent" | "wrapper" | "wrapperDialog" | "searchContainer" | "searchParent" | "searchIcon">;
export declare const StyledModal: import("@emotion/styled").StyledComponent<{
    BackdropComponent?: import("react").ElementType<any> | undefined;
    BackdropProps?: Partial<import("@mui/base").BackdropUnstyledProps<"div", {}>> | undefined;
    children: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    classes?: Partial<import("@mui/base/ModalUnstyled").ModalUnstyledClasses> | undefined;
    closeAfterTransition?: boolean | undefined;
    components?: {
        Root?: import("react").ElementType<any> | undefined;
    } | undefined;
    componentsProps?: {
        root?: (import("react").HTMLAttributes<HTMLDivElement> & import("@mui/base/ModalUnstyled").ModalUnstyledComponentsPropsOverrides) | undefined;
    } | undefined;
    container?: Element | (() => Element | null) | null | undefined;
    disableAutoFocus?: boolean | undefined;
    disableEnforceFocus?: boolean | undefined;
    disableEscapeKeyDown?: boolean | undefined;
    disablePortal?: boolean | undefined;
    disableRestoreFocus?: boolean | undefined;
    disableScrollLock?: boolean | undefined;
    hideBackdrop?: boolean | undefined;
    keepMounted?: boolean | undefined;
    onBackdropClick?: import("react").ReactEventHandler<{}> | undefined;
    onClose?: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    open: boolean;
} & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "components" | "open" | "classes" | "children" | "componentsProps" | "disablePortal" | "onClose" | "container" | "BackdropComponent" | "BackdropProps" | "closeAfterTransition" | "disableAutoFocus" | "disableEnforceFocus" | "disableEscapeKeyDown" | "disableRestoreFocus" | "disableScrollLock" | "hideBackdrop" | "keepMounted" | "onBackdropClick"> & import("@mui/system").MUIStyledCommonProps<import("@mui/system").Theme>, {}, {}>;
export declare const Backdrop: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/system").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
