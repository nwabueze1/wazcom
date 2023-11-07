const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

export function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

export const convertFromBytesToMb = (sizeInByte: number) => (sizeInByte / (1024 * 1024)).toFixed(2);
