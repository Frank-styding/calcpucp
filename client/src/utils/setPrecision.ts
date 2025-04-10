import { IPrecision } from "./IPrecision";

export const setPrecision = (value: number, precision?: IPrecision) => {
  if (!precision) return value;
  if (precision.round) {
    return Math.round(value);
  }
  if (precision.fixed) {
    return parseFloat(value.toFixed(precision.decimals));
  }

  const divider = Math.pow(10, precision.decimals || 0);
  return Math.trunc(value * divider) / divider;
};
