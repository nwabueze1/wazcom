export type ImageUploadStyleProps = {
  width?: string;
  height?: string;
  border?: string;
  uploadedImgPadding?: string;
  uploadButtonPadding?: string;
};

export type ImageUploadProps = ImageUploadStyleProps & {
  props?: any;
  name?: string;

  error?: boolean;
  label?: React.ReactNode;
  placeholder?: string;
  file?: File;
  fileName?: string;
  handleFile?: (e: React.ChangeEvent<any>) => void;
};
