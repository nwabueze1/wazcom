export const shortenFileName = (filename: string) => {
  const maxSize = 10;
  const concatSize = maxSize - 5;

  if (filename.length <= maxSize) return filename;

  const split = filename.split(".");
  let ext = "";
  let fInfo = "";
  if (split.length > 1) {
    const lastIndex = split.length - 1;
    ext = split[lastIndex];

    const copy = split.slice(0, lastIndex).join(".");
    fInfo = copy.substring(0, concatSize).concat("...");
  }

  if (fInfo) return fInfo.concat(ext);

  return filename.slice(maxSize);
};
