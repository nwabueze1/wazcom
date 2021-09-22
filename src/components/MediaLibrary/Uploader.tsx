import { useMutation } from "@apollo/client";
import React, { useCallback } from "react";
import { UPLOAD_IMAGE } from "./graphQL";

type UploaderProps = HTMLInputElement;

export const Uploader = React.forwardRef<UploaderProps>((props, ref) => {
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<any>) => {
      event.preventDefault();
      const file = event.target?.files[0];
      console.log(file);
      await uploadImage({ variables: { image: file } }).then((response) => {
        console.log(response);
      });
      // setFormData({ ...formData, image: file });
    },
    [],
  );
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
