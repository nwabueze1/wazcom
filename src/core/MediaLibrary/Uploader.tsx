import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import * as React from "react";
import { UPLOAD_IMAGE } from "./graphQL";

type UploaderProps = HTMLInputElement;

export const Uploader = React.forwardRef<UploaderProps>((props, ref) => {
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileChange = useCallback(async (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    const file = event.target?.files[0];
    //;
    await uploadImage({ variables: { image: file } }).then(() => {
      // ;
    });
    // setFormData({ ...formData, image: file });
  }, []);
  return (
    <input
      name="image_url"
      accept="image/*"
      hidden
      type="file"
      ref={ref}
      onChange={handleFileChange}
      {...props}
    />
  );
});

Uploader.displayName = "Uploader";
