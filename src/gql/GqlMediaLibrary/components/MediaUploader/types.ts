import { GqlMediaSelectorConfigProps } from "../../../GqlMediaLibrary/types";
import { MediaFilesDetails } from "../../types";

export interface MediaUploaderProps {
  open: boolean;
  handleClose: (args?: string) => void;
  onChange?: (data: { name: string; value: any }) => void;
  config: GqlMediaSelectorConfigProps["config"];
  name: string;
  mediaFiles: MediaFilesDetails[];
}
