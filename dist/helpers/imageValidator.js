import { notify } from "./notify";
export var validateImg = function (file, fileSize) {
    var allowedTypes = ["jpeg", "jpg", "png", "svg", "webp"];
    var type = file.type.split("/")[1];
    var size = file.size;
    if (!allowedTypes.includes(type)) {
        notify("error", "File type not supported");
        return false;
    }
    if (size > (fileSize !== null && fileSize !== void 0 ? fileSize : 7000000)) {
        notify("error", "Image cannot be larger than 2MB. Please try again");
        return false;
    }
    return true;
};
