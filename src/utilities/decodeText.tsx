import { ReactNode } from "react";

export const decodeText = (word?: string | ReactNode) => {
  if (!word) return "";

  return <span style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: word }} />;
};
