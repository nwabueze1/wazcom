import { notify } from "./notify";

export const validateImg = (file: File, fileSize?: number) => {
  const allowedTypes = ["jpeg", "jpg", "png", "svg", "webp"];
  const type = file.type.split("/")[1];
  const size = file.size;

  if (!allowedTypes.includes(type)) {
    notify("error", "File type not supported");
    return false;
  }

  const maxSize = fileSize ?? 7000000;

  if (size > maxSize) {
    const sizeInMB = maxSize / (1024 * 1024);
    notify("error", `Image cannot be larger than ${sizeInMB}MB. Please try again`);
    return false;
  }

  return true;
};
