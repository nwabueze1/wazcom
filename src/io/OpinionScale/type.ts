export type OpinionScaleClassNamesType = Partial<
  Record<
    "containedBox" | "outlinedBox" | "boxText" | "root" | "errorMessage" | "boxContainer" | "label",
    string
  >
>;

export type OpinionScalePropsType = {
  variant: "contained" | "outlined";
  name: string;
  value: number;
  isError?: boolean;
  helperText?: string;
  label?: string;
  min?: number;
  max?: number;
  onChange: (e: { name: string; value: number }) => void;
  classNames?: OpinionScaleClassNamesType;
};
