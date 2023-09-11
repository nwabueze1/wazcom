export declare const validateFileBySize: ({ file, min_size_kb, max_size_mb, }: {
    file: File;
    min_size_kb?: number | undefined;
    max_size_mb?: number | undefined;
}) => {
    valid: boolean;
    error?: string;
};
