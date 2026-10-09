import { TScreen } from "./../../types";
export interface CropAndSizeProps {
  screenType: TScreen;
  handleChange: (field: string, result: string) => void;
}
