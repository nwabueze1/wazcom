import { CommonProps } from "types";

export type DialogueProps = CommonProps & {
  handleFilesSelection: () => void;
  open: any;
  setOpen: any;
};
