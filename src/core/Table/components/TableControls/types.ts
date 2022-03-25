import { TableProps } from "../../types";

export interface TableControlsProps {
  controls: TableProps["controls"];
  handleControlsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  tableValues: { [key: string]: any }[];
  controlsFormData: { [key: string]: any };
}
