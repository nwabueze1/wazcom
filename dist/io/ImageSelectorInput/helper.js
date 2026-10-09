var fileTypes = [
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
export function validFileType(file) {
    return fileTypes.includes(file.type);
}
export var convertFromBytesToMb = function (sizeInByte) { return (sizeInByte / (1024 * 1024)).toFixed(2); };
