import { FC, useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMbmcBlock6Styles } from "./styles";
import { MbmcBlock6Props, TCategory } from "./types";
import { MbmcCard, MbmcCardProps } from "../../../../templates/mbmc/components/MbmcCard";
import clx from "classnames";
import { handleElementClick } from "../../utilities";
import { TAppState } from "../../../types";
import { CoreMenuFields } from "../../models";
import { initialClientCategories, useGetClientCategories } from "./helpers";

export const MbmcBlock6: FC<MbmcBlock6Props> = ({
  mode = "view",
  activeElement,
  handleClick,
  index,
  heading,
  description,
  menu_uuid,
  isSsr = true,
}) => {
  const classes = useMbmcBlock6Styles();
  const { restaurant } = useSelector<TAppState, TAppState>((state) => state);
  const [clientCategories, setClientCategories] =
    useState<MbmcCardProps[]>(initialClientCategories);
  const getClientCategories = useGetClientCategories();

  useEffect(() => {
    if (isSsr || !menu_uuid) return;

    const fetchClientCategories = async () => {
      const clientCategories = await getClientCategories({ uuid: menu_uuid });
      setClientCategories(clientCategories);
    };

    fetchClientCategories();
  }, [menu_uuid]);

  const categories = useMemo(() => {
    if (!restaurant?.menu) return undefined;
    const menu = restaurant?.menu as CoreMenuFields;
    const menuCategories = menu?.menuCategories as unknown as TCategory[];

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
  }, []);

  const displayCategories = () =>
    (categories ?? clientCategories).map((category, index) => (
      <MbmcCard key={index} {...category} mode={mode} handleClick={handleClick} />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.block6Container}>
        <div className={classes.block6Content}>
          <h3
            className={clx(
              classes.block6Heading,
              activeElement === `${String(index)}.heading` && classes.block6ActiveElement,
            )}
            onClick={() => handleElementClick(mode, `${String(index)}.heading`, handleClick)}
          >
            {heading}
          </h3>
          <p
            className={clx(
              classes.block6Description,
              activeElement === `${String(index)}.description` && classes.block6ActiveElement,
            )}
            onClick={() => handleElementClick(mode, `${String(index)}.description`, handleClick)}
          >
            {description}
          </p>
        </div>
        <div
          className={clx(
            classes.block6ScrollContainer,
            activeElement === `${String(index)}.menu_uuid` && classes.block6ActiveElement,
          )}
          onClick={() => handleElementClick(mode, `${String(index)}.menu_uuid`, handleClick)}
        >
          {displayCategories()}
        </div>
      </div>
    </div>
  );
};
