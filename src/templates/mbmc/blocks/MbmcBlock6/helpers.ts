import { MbmcCardProps } from "build";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../../../helpers/graphQL";
import { TAppState } from "../../../types";
import { GET_MENU_CATEGORIES } from "./graphql";

export const useGetClientCategories = () => {
  const { gatewayUrl } = useSelector<TAppState, TAppState>((state) => state);
  const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), []);

  return async (variables: { uuid: string }) => {
    try {
      const { data, errors } = await client.query({ query: GET_MENU_CATEGORIES, variables });

      if (!data || errors) return [];

      const menuCategories = data?.getMenu?.activeMenuCategories;
      const parsedCategories = [];

      for (const category of menuCategories) {
        const parsedCategory: any = {
          heading: category?.title,
          image: category["menuItems"][0]["image_url"],
          ctas: [
            {
              text: "Order now",
              size: "sm",
              url: `/menu?category_uuid=${category.uuid}#menu`,
            },
          ],
        };
        parsedCategories.push(parsedCategory);
      }

      return parsedCategories;
    } catch (error) {
      return [];
    }
  };
};

export const initialClientCategories: MbmcCardProps[] = [
  {
    heading: "Continental Breakfast",
    image:
      "https://sytbuildr.s3.eu-west-2.amazonaws.com/prod/3Q7uCQ60OxRGrMn4C4tCVF0Vw0J46q1aWj8QNYL9.jpg",
    ctas: [
      {
        text: "Order now",
        size: "sm",
        url: `/menu`,
      },
    ],
  },
  {
    heading: "Soups and Stews",
    image:
      "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/koYLtSyKSjsWpEmM43AeRZtkdQpBEL5soRvR9nQ2.jpg",
    ctas: [
      {
        text: "Order now",
        size: "sm",
        url: `/menu`,
      },
    ],
  },
  {
    heading: "Chicken Potpourri",
    image:
      "https://sytbuildr.s3.eu-west-2.amazonaws.com/ca2291e7-7789-43c5-8ab3-5bbb01228b07/dKYVwmX4ao6WpEck4AWMh6Rup83WxDkMUGOrmpEi.jpg",
    ctas: [
      {
        text: "Order now",
        size: "sm",
        url: `/menu`,
      },
    ],
  },
];
