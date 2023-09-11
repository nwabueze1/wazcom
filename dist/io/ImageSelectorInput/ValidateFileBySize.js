import { convertFromBytesToMb } from "./helper";
export var validateFileBySize = function (_a) {
    var file = _a.file, min_size_kb = _a.min_size_kb, max_size_mb = _a.max_size_mb;
    if (!file) {
        return { valid: false, error: "No file provided." };
    }
    var min_size_bytes;
    var max_size_bytes;
    if (min_size_kb)
        min_size_bytes = min_size_kb * 1024;
    if (max_size_mb)
        max_size_bytes = max_size_mb * 1024 * 1024;
    if (min_size_bytes && file.size < min_size_bytes) {
        return {
            valid: false,
            error: "Image cannot be smaller than ".concat(convertFromBytesToMb(min_size_bytes), " MB."),
        };
    }
    if (max_size_bytes && file.size > max_size_bytes) {
        return {
            valid: false,
            error: "Image cannot be larger than ".concat(convertFromBytesToMb(max_size_bytes), " MB."),
        };
    }
    return { valid: true };
};
