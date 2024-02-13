import { CoreCartFields } from "../templates/restaurant/types/CoreCartFields";
import { calculateCartItemsSumTotal } from "./"; // Replace 'your-file' with the actual file path
import { cart } from "./data";

describe("calculateCartItemsSumTotal", () => {
  it("should return 0 for an undefined cart", () => {
    expect(calculateCartItemsSumTotal()).toBe(0);
  });

  it("should return 0 for a cart with no cart items", () => {
    const cart: CoreCartFields = {
      cartItems: [],
      created_at: "",
      expires: "",
      id: "",
      __typename: "Cart",
      updated_at: "",
      uuid: "uuid-of-cart",
      customer: null,
      guest: null,
    };

    expect(calculateCartItemsSumTotal(cart as CoreCartFields)).toBe(0);
  });

  it("should correctly calculate the sum total for a cart with valid cart items", () => {
    expect(calculateCartItemsSumTotal(cart)).toBe(87.04); // [(8+10) * 1] + [(8+15) * 3] = 87
  });
});
