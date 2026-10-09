import { calculateCartItemTotal } from "./";
import { options } from "./data";

describe("calculateCartItemTotal", () => {
  const menuItem = {
    price: 10,
    name: "Sweet food",
    image: {
      src: "http://image.com",
    },
  };

  it("should return 0 for a cart item with no options and quantity of 0", () => {
    const cartItem: any = {
      uuid: "1",
      quantity: 0,
      detail: "Some details",
      options: "[]",
      menuItem,
    };

    expect(calculateCartItemTotal(cartItem)).toBe(0);
  });

  it("should correctly calculate total for a cart item with no options and quantity greater than 0", () => {
    const cartItem: any = {
      uuid: "2",
      quantity: 3,
      detail: "Some details",
      options: "[]",
      menuItem,
    };

    expect(calculateCartItemTotal(cartItem)).toBe(30); // 3 * 10
  });

  it("should correctly calculate total for a cart item with valid options and quantity greater than 0", () => {
    const cartItem: any = {
      uuid: "3",
      quantity: 2,
      detail: "Some details",
      options: JSON.stringify(options),
      menuItem: {
        price: 10,
        name: "Sweet food",
        image: {
          src: "http://image.com",
        },
      },
    };

    const result = calculateCartItemTotal(cartItem);

    expect(result).toBe(36.02); // (10 + 8) * 2
  });
});
