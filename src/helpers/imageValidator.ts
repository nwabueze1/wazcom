import { toast } from "react-toastify";

export const validateImg = (file: File) => {
    const allowedTypes = ["jpeg", "jpg", "png"];
    const type = file.type.split("/")[1];
    const size = file.size;

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
