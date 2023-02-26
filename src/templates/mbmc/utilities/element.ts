export const handleElementClick = (
  mode: "view" | "edit",
  element: string,
  handleClick?: (element: string) => void,
) => {
  if (mode === "view") return;
  handleClick?.(element);
};
