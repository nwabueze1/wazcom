import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../../../helpers/graphQL";
import { TAppState } from "../../../types";
import { GET_MENU } from "./graphql";

export const useGetClientMenu = () => {
    const { gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);

  return async (variables: { uuid: string }) => {
    try {
      const { data, errors } = await client.query({ query: GET_MENU, variables });

      if (!data || errors) return [];

      const { activeMenuCategories, activeMenuItems, ...rest } = data?.getMenu;
      return { ...rest, menuCategories: activeMenuCategories, menuItems: activeMenuItems };
    } catch (error) {
      return [];
    }
  };
};

export const initialClientMenu: any = {
  __typename: "Menu",
  uuid: "8b63de49-6087-4a66-b1e4-90e8d9ef1629",
  name: "okakak",
  options_config: [
    {
      __typename: "MenuOptionsConfig",
      name: "Fries",
      uuid: "20426712-9ed0-4e83-ac99-43c0dd9aa248",
      type: "selection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 15,
            name: "Milk Fries",
          },
          {
            __typename: "DishOption",
            amount: 10,
            name: "Chocolate Fries",
          },
          {
            __typename: "DishOption",
            amount: 5,
            name: "French Fries",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "Sodas",
      uuid: "769eb3e4-7b90-49d9-811a-2a58d1ed158d",
      type: "extras",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 10,
            name: "Coke",
          },
          {
            __typename: "DishOption",
            amount: 12,
            name: "Pepsi",
          },
          {
            __typename: "DishOption",
            amount: 20,
            name: "Fanta",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "defend",
      uuid: "b96877e6-58b8-4fcf-abd7-91f0e4411d2c",
      type: "selection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 10,
            name: "rice",
          },
          {
            __typename: "DishOption",
            amount: 5,
            name: "beans",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "cryke",
      uuid: "a200028a-a201-49f2-8994-4140665d4d0d",
      type: "selection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 20,
            name: "fanta",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "gririri",
      uuid: "1efa645a-f22f-4f9c-b94a-6461ef1ea1c6",
      type: "deselection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 23,
            name: "sjs.ms,s",
          },
          {
            __typename: "DishOption",
            amount: 32,
            name: "ssklsms",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "gririri",
      uuid: "8c51208d-476b-4169-a07d-1ffb81926b1f",
      type: "deselection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 23,
            name: "sjs.ms,s",
          },
          {
            __typename: "DishOption",
            amount: 32,
            name: "ssklsms",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "fries",
      uuid: "90c63f78-86f0-4855-b844-bbe0dc3c9b8c",
      type: "deselection",
      options: {
        __typename: "OptionsConfig",
        selection: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        extras: [
          {
            __typename: "DishOption",
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            __typename: "DishOption",
            amount: 12,
            name: "sweet fries",
          },
          {
            __typename: "DishOption",
            amount: 20,
            name: "salty fries",
          },
        ],
      },
    },
    {
      __typename: "MenuOptionsConfig",
      name: "drinks",
      uuid: "10ca7f58-9ebf-4d1b-982b-3840550a47cc",
      type: "selection",
      options: {
        selection: [
          {
            amount: 10,
            name: "Fanta",
          },
          {
            amount: 10,
            name: "Coke",
          },
          {
            amount: 5,
            name: "Pepsi",
          },
        ],
        extras: [
          {
            amount: 0,
            name: "",
          },
        ],
        deselection: [
          {
            amount: 0,
            name: "",
          },
        ],
      },
    },
  ],
  restaurant: {
    uuid: "c831a85e-6a75-4ee0-9f93-bfe1293ae677",
    site: {
      uuid: "ae043bd3-6250-47e3-8717-e08a55937088",
    },
    bank_info: {
      currency: "USD",
      delivery_fee: 13,
    },
  },
  menuCategories: [
    {
      id: "3",
      uuid: "f3f7bff8-880c-437d-a98f-15e1702a1bbe",
      title: "Salads",
    },
    {
      id: "4",
      uuid: "93419cd7-2755-4bd3-8665-60624de2f6c1",
      title: "Soups and Stews",
    },
    {
      id: "26",
      uuid: "01248e07-3fcd-42ec-92f6-249b584de5f9",
      title: "Chicken Potpourri",
    },
  ],
  menuItems: [
    {
      __typename: "MenuItem",
      uuid: "c4cdcace-6993-4840-9d93-1d6a64c08dd3",
      name: "suya suya",
      description: "excellent suya from north ameria",
      menuCategory: {
        id: "3",
      },
      options: ["b96877e6-58b8-4fcf-abd7-91f0e4411d2c"],
      image_url:
        "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
      price: 100,
    },
    {
      __typename: "MenuItem",
      uuid: "16e2a94e-5b69-4e86-9eec-fabe073c7506",
      name: "ssss",
      description: "sss",
      menuCategory: {
        id: "4",
      },
      options: [],
      image_url:
        "https://sytbuildr.s3.eu-west-2.amazonaws.com/5a246d83-b966-4557-b6bb-19791c662d73/VDim4VIsdd15c6FqETBUVMfYZAvGAGpz5NW0glOt.jpg",
      price: 56,
    },
    {
      __typename: "MenuItem",
      uuid: "5771cb58-67b4-4d51-850d-f46bf2c0b9db",
      name: "sksl,s/,ss sj,s",
      description: "nms",
      menuCategory: {
        id: "4",
      },
      options: [],
      image_url:
        "https://sytbuildr.s3.eu-west-2.amazonaws.com/5a246d83-b966-4557-b6bb-19791c662d73/VDim4VIsdd15c6FqETBUVMfYZAvGAGpz5NW0glOt.jpg",
      price: 50,
    },
    {
      __typename: "MenuItem",
      uuid: "7525132e-eaf6-4ac0-a87d-5e6424027323",
      name: "Olamileke Biodun",
      description: "snilsk.,ms skk",
      menuCategory: {
        id: "4",
      },
      options: [],
      image_url:
        "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
      price: 100,
    },
    {
      __typename: "MenuItem",
      uuid: "e1131308-324a-4c2b-ba4b-0d1155021367",
      name: "holly wood",
      description: "holly wood",
      menuCategory: {
        id: "26",
      },
      options: [],
      image_url:
        "https://images.pexels.com/photos/15823317/pexels-photo-15823317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      price: 11,
    },
  ],
};
