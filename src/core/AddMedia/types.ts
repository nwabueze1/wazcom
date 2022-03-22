import { CommonProps } from "types";

export type AddMediaProps = CommonProps & {
  handleFilesSelection: () => void;
 handleOpenMedia: boolean;
  handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
};
