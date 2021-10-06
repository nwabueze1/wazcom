import { toast } from "react-toastify";
export var validateImg = function (file) {
    var allowedTypes = ["jpeg", "jpg", "png"];
    var type = file.type.split("/")[1];
    var size = file.size;
    if (!allowedTypes.includes(type)) {
        toast.error("file type not supported");
        return false;
    }
    if (size > 7000000) {
        toast.error("image is too large");
        return false;
    }
    return true;
};
