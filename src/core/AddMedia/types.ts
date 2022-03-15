import { CommonProps } from "types";

export type AddMediaProps = CommonProps & {
  handleFilesSelection: () => void;
  open: any;
  setOpen: any;
};
