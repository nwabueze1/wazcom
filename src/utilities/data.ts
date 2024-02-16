export const options = [
  {
    type: "selection",
    name: "Size",
    selectedChoices: [
      {
        name: "Medium",
        amount: "2.01",
      },
    ],
  },
  {
    type: "extras",
    name: "Type",
    selectedChoices: [
      {
        name: "Barbeque",
        amount: "4",
      },
      {
        name: "Damn",
        amount: "3",
      },
    ],
  },
  {
    type: "deselection",
    name: "Your Ingredient",
    selectedChoices: [
      {
        name: "Onions",
        amount: "1",
      },
    ],
  },
];

export const cart: any = {
  uuid: "2",
  currency: "USD",
  expires: new Date(),
  cartItems: [
    {
      uuid: "item1",
      quantity: "1",
      detail: "Item 1 details",
      options: JSON.stringify(options), //8
      menuItem: {
        price: 10,
      },
    },
    {
      uuid: "item2",
      quantity: 3,
      detail: "Item 2 details",
      options: JSON.stringify(options), //8
      menuItem: {
        price: 15,
      },
    },
  ],
  restaurant: {},
};
