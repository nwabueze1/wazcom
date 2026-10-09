export type ChangeFn = (e: { name: string; value: string }) => void;

export type IOPropsType = {
  onChange: ChangeFn;
  onFocus: ChangeFn;
  onEnter: ChangeFn;
  onBlur: ChangeFn;
};
