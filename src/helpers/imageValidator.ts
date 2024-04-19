import { notify } from "./notify";

export const validateImg = (file: File, fileSize?: number) => {
  const allowedTypes = ["jpeg", "jpg", "png", "svg", "webp"];
  const type = file.type.split("/")[1];
  const size = file.size;

  if (!allowedTypes.includes(type)) {
    notify("error", "File type not supported");
    return false;
  }

  if (size > (fileSize ?? 7000000)) {
    notify("error", "Image cannot be larger than 2MB. Please try again");
    return false;
  }

  return true;
};
