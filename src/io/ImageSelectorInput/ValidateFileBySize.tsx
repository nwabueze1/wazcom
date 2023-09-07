import { convertFromBytesToMb } from "./helper";

export const validateFileBySize = ({
  file,
  min_size_kb,
  max_size_mb,
}: {
  file: File;
  min_size_kb?: number;
  max_size_mb?: number;
}): { valid: boolean; error?: string } => {
  if (!file) {
    return { valid: false, error: "No file provided." };
  }

  let min_size_bytes: number | undefined;
  let max_size_bytes: number | undefined;

  if (min_size_kb) min_size_bytes = min_size_kb * 1024;
  if (max_size_mb) max_size_bytes = max_size_mb * 1024 * 1024;

  if (min_size_bytes && file.size < min_size_bytes) {
    return {
      valid: false,
      error: `Image cannot be smaller than ${convertFromBytesToMb(min_size_bytes)} MB.`,
    };
  }
  if (max_size_bytes && file.size > max_size_bytes) {
    return {
      valid: false,
      error: `Image cannot be larger than ${convertFromBytesToMb(max_size_bytes)} MB.`,
    };
  }

  return { valid: true };
};
