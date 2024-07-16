export declare const validateFileBySize: ({ file, min_size_kb, max_size_mb, }: {
    file: File;
    min_size_kb?: number;
    max_size_mb?: number;
}) => {
    valid: boolean;
    error?: string;
};
