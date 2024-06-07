import { ReactNode } from "react";

export const decodeText = (word?: string | ReactNode) => {
  if (!word) return "";

  if (typeof word !== "string") word = JSON.stringify(word);

  return <span style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: word }} />;
};
