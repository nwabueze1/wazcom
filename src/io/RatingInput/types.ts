export type RatingClassNamesType = Partial<
  Record<"rating" | "root" | "label" | "errorMessage", string>
>;

export type RatingPropsType = {
  variant: "contained" | "outlined";
  name: string;
  value: number;
  isError?: boolean;
  helperText?: string;
  label?: string;
  min?: number;
  max?: number;
  onChange: (e: { name: string; value: number }) => void;
  classNames?: RatingClassNamesType;
};
