export type ImageSelectorInputPropsType = {
  max_size_mb?: number;
  min_size_kb?: number;
  value?: File | null;
  onChange?: (e: { name: string; value: File | null }) => void;
  label?: string;
  isError?: boolean;
  helperText?: string;
  name: string;
  accept?: string;
  loading?: boolean;
  uploadFn?: (data: { name: string; file: File | null }) => Promise<boolean>;
  classNames?: UploadClassNames;
  url?: string;
};

export type UploadClassNames = {
  label?: string;
  text?: string;
  selectButton?: string;
  changeFileButton?: string;
  container?: string;
  helperText?: string;
};
