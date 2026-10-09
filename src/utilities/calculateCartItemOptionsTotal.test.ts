import { calculateCartItemOptionsTotal } from "./";
import { options } from "./data";

describe("calculateCartItemOptionsTotal", () => {
  it("should return 0 for undefined or non-string options", () => {
    expect(calculateCartItemOptionsTotal()).toBe(0.0);
    expect(calculateCartItemOptionsTotal(42)).toBe(0.0);
    expect(calculateCartItemOptionsTotal({})).toBe(0.0);
  });

  it("should correctly calculate total for valid options", () => {
    expect(calculateCartItemOptionsTotal(JSON.stringify(options))).toBe(8.01); // 2 + 4 + 3 -1
  });
});
