import { useState } from "react";
import { Wrapper } from "../../core";
import { FileSelectorInput, ImageSelectorInput } from "../../io";

export const FileUpload = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  return (
    <Wrapper title="File Upload">
      <ImageSelectorInput
        name="file"
        value={selectedImage}
        onChange={(e) => setSelectedImage(e.value)}
      />
      <FileSelectorInput name="file" value={uploadFile} onChange={(e) => setUploadFile(e.value)} />
    </Wrapper>
  );
};
