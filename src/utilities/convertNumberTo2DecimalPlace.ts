export const convertNumberTo2DecimalPlace = (number: number) => {
  const result = number.toFixed(2);

  return Number(result);
};
