export const isNotRenderAnchor = (url: string, mode: "view" | "edit") =>
    url?.startsWith("/") || url === "#" || mode === "edit";

export const clickAction = (url: string, mode: "view" | "edit", handleClick: () => void) => {
    if (mode === "edit" || (mode === "view" && url !== "#")) handleClick();
};
