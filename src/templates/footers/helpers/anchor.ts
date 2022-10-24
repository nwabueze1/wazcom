
export const isNotRenderAnchor = (url: string, mode: "view" | "edit") =>
url?.startsWith("/") || url === "#" || mode === "edit";