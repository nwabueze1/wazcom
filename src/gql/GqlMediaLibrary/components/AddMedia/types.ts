import { CommonProps } from "types";

export type AddMediaProps = CommonProps & {
  handleFilesSelection: () => void;
  handleOpenMedia: boolean;
  handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
  viewOnly?: boolean;
};

export type DialogueProps = CommonProps & {
  handleCloseMedia: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilesSelection: () => void;
  showHeader?: boolean;
};
